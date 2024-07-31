import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Note from "./Note/Note";
import { useEffect, useState } from "react";
import './Notes.css'
import NoteType from "../../Types/Note.ts"

export default function Notes() {
    const [currentNote, setCurrentNote] = useState<NoteType>({
        created: 0,
        files: [],
        id: 0,
        last_edited: 0,
        tags: [],
        text: "",
        times_edited: 0,
        title: "",
        user_id: 0
    });
    const [currentNoteList, setCurrentNoteList] = useState<NoteType[]>([]);
    const [currentSearchQuery, setCurrentSearchQuery] = useState<string>("");

    //function for constructing url of request to API
    function constructUrl() {
        const baseUrl = "http://localhost:3030/notes";
        const searchQuery = "?title=" + currentSearchQuery
        let requestUrl: string;
        // eslint-disable-next-line prefer-const
        requestUrl = baseUrl + searchQuery;
        return requestUrl;
    }

    async function getNotes(requestUrl: string) {
        const response = await fetch(requestUrl, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
            credentials: "include",
        })
        const body = await response.json();
        console.log(body);
        const noteList: NoteType[] = body.data.notes;
        console.log("note list:", noteList);
        setCurrentNoteList(noteList);
    }

    useEffect(() => {
        getNotes("http://localhost:3030/notes");
        console.log("in useEffect")
    }, [])

    function handleSearchInput(e: any) {
        const lowerCase = e.target.value.toLowerCase();
        if (lowerCase === "") {
            getNotes("http://localhost:3030/notes");
            setCurrentSearchQuery("");
        }
        else {
            setCurrentSearchQuery(lowerCase);
        }
    }

    function handleSearching() {
        console.log(currentSearchQuery);
        getNotes(constructUrl());
    }

    function updateNoteList() {
        getNotes("http://localhost:3030/notes");
        setCurrentNote({
            created: 0,
            files: [],
            id: 0,
            last_edited: 0,
            tags: [],
            text: "",
            times_edited: 0,
            title: "",
            user_id: 0
        });
    }

    async function createNote() {
        const response = await fetch("http://localhost:3030/notes", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "text": "",
                "title": ""
            }),
            credentials: "include",
        })
        const body = await response.json();
        console.log(body);
        const data: NoteType | null = body.data;
        if (data !== null) {
            setCurrentNote(data);
            console.log(data.id);
        }
        getNotes("http://localhost:3030/notes");
    }

    function handleCreatingNote() {
        createNote();
        console.log("in creatingNote");
    }

    function handleChoosingNote(note: NoteType) {
        console.log(note);
        setCurrentNote(note);
    }

    return (
        <div className="notes-page-container">
            <Header handleSearching={handleSearching} handleSearchInput={handleSearchInput} handleCreatingNote={handleCreatingNote} />
            <Aside currentNoteList={currentNoteList} handleChoosingNote={handleChoosingNote} />
            <Note currentNote={currentNote} updateNoteList={updateNoteList} />
        </div>
    );
}
