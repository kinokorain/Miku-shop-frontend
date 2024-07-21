import { useState } from "react";

export default function Note(props: { currentNoteId: number, updateNoteList: () => void }) {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    async function updateNote() {
        console.log(props.currentNoteId);
        const url = "http://localhost:3030/notes/" + props.currentNoteId;
        const response = await fetch(url, {
            method: "PATCH",
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

    function handleSaveClick() {
        updateNote();
        console.log("in handleSaveClick");
        props.updateNoteList();

    }
    return (
        <div className="note-container">
            <div>
                {props.currentNoteId === 0 ? <></> : <input type="text" className="note-heading" onChange={(e) => {
                    setTitle(e.target.value);
                }} />}
                <span>17.03.17</span>
            </div>
            {props.currentNoteId === 0 ? <></> : <textarea className="note-text" onChange={(e) => {
                setText(e.target.value);
            }} />}
            {props.currentNoteId === 0 ? <></> : <button onClick={handleSaveClick}>Save note</button>}
        </div >
    );
}
