import { useEffect, useState } from "react";
import NoteType from "../../../Types/Note.ts"


export default function Note(props: { currentNote: NoteType, updateNoteList: () => void }) {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [popupVisible, setPopupVisible] = useState<boolean>(false)

    useEffect(() => {
        setTitle(props.currentNote.title);
        setText(props.currentNote.text);
        console.log("in useEffect")
    }, [props.currentNote.title, props.currentNote.text])



    async function updateNote() {
        console.log(props.currentNote.id);
        const url = "http://localhost:3030/notes/" + props.currentNote.id;
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
        console.log("body in updateNote:", body);
    }

    async function handleSaveClick() {
        try {
            await updateNote();
            console.log("in handleSaveClick");
            props.updateNoteList();
        }
        catch (error) {
            console.log("error in handleSaveClick");
        }
    }

    function togglePopup() {
        setPopupVisible(!popupVisible)
    }

    async function handleDeleteNote() {
        console.log("in handledeleteNote")
        togglePopup();
        const url = "http://localhost:3030/notes/" + props.currentNote.id;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            credentials: "include",
        })
        const body = await response.json();
        props.updateNoteList();
        console.log("body in deleteNote:", body);

        const noteListItems = document.querySelectorAll(".note-list-item");
        noteListItems.forEach((element) => {
            element.classList.remove("active-note")
        })
    }

    return (
        <div className="note-container">
            <div className="flex-input-container">
                {
                    props.currentNote.id === 0 ? <></> : <input value={title} type="text" className="note-heading" onChange={(e) => {
                        setTitle(e.target.value);
                    }} />}
            </div>
            {
                props.currentNote.id === 0 ? <></> : <textarea value={text} className="note-text" onChange={(e) => {
                    setText(e.target.value);
                }} />}
            {props.currentNote.id === 0 ? <></> : <button onClick={handleSaveClick}>Save note</button>}
            {props.currentNote.id === 0 ? <></> : <button onClick={togglePopup}>Delete note</button>}
            {popupVisible ? <div className="delete-popup">
                <p>are you sure?</p>
                <button onClick={togglePopup}>cancel</button>
                <button onClick={handleDeleteNote} >delete</button>
            </div> : <></>}
        </div >
    );
}
