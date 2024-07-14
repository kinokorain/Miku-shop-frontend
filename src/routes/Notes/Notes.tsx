import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Note from "./Note/Note";
import { useEffect, useState } from "react";
import './Notes.css'
import NoteType from "../../Types/Note.ts"

export default function Notes() {
    const [currentNoteId, setCurrentNoteId] = useState(0);

    async function getNotes() {
        const response = await fetch("http://localhost:3030/notes", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
            credentials: "include",
        })
        const body = await response.json();
        console.log(body);
    }

    useEffect(() => {
        getNotes();
        console.log("in useEffect")
    }, [])

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
            setCurrentNoteId(data.id);
            console.log(data.id);
        }
    }

    function handleCreatingNote() {
        createNote();
        console.log("in creatingNote");
    }

    return (
        <>
            <Header handleCreatingNote={handleCreatingNote} />
            <div className="flex">
                <Aside />
                <Note currentNoteId={currentNoteId} />
            </div>
        </>
    );
}
