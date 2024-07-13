import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Note from "./Note/Note";
import { useEffect } from "react";
import './Notes.css'

export default function Notes() {
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

    return (
        <>
            <Header />
            <div className="flex">
                <Aside />
                <Note />
            </div>
        </>
    );
}
