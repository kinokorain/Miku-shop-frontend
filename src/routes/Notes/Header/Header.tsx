import React, { useState } from "react";

export default function Header() {
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
        <header className="header">
            <div>
                <input type="search" />
                <button>sewch</button>
            </div>
            <div className="flex">
                <button>+</button>
                <div>fiwters</div>
            </div>
        </header>
    );
}
