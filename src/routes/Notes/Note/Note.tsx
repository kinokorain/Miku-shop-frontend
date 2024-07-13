import { useState } from "react";

export default function Note() {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    async function createNote() {
        const response = await fetch("http://localhost:3030/notes", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "text": text,
                "title": title
            }),
            credentials: "include",
        })
        const body = await response.json();
        console.log(body);
    }
    return (
        <div className="note-container">
            <input type="text" className="note-heading" onChange={(e) => {
                setTitle(e.target.value);
            }} />
            <span>17.03.17</span>
            <input type="text" className="note-text" onChange={(e) => {
                setText(e.target.value);
            }} />
            <button onClick={createNote}>Create note</button>
        </div>
    );
}
