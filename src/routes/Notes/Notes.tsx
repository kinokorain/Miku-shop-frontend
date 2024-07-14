import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Note from "./Note/Note";
import { useEffect, useState } from "react";
import './Notes.css'

export default function Notes() {
    const [currentNoteId, setCurrentNoteId] = useState();
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
    }

    function handleCreatingNote() {
        console.log("in creatingNote");
    }

    return (
        <>
            <Header handleCreatingNote={handleCreatingNote} />
            <div className="flex">
                <Aside />
                <Note />
            </div>
        </>
    );
}
