import { useEffect, useState } from "react";
import NoteType from "../../../Types/Note.ts"
import TagType from "../../../Types/Tag.ts"

export default function Note(props: { getUserTags: () => void, userTags: TagType[], currentNote: NoteType, updateNoteList: () => void }) {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [deletePopupVisible, setDeletePopupVisible] = useState<boolean>(false)
    const [tagPopupVisible, setTagPopupVisible] = useState<boolean>(false)

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

    function toggleDeletePopup() {
        setDeletePopupVisible(!deletePopupVisible)
    }

    function toggleTagPopup() {
        setTagPopupVisible(!tagPopupVisible)
    }

    async function handleDeleteNote() {
        console.log("in handledeleteNote")
        toggleDeletePopup();
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

    const dateCreated = new Date(props.currentNote.created * 1000);
    let dayCreated = dateCreated.getDate().toString();
    let monthCreated = dateCreated.getMonth().toString();
    if (dateCreated.getDate() < 10) {
        dayCreated = "0" + dateCreated.getDate();
    }
    if (dateCreated.getMonth() < 10) {
        monthCreated = "0" + (dateCreated.getMonth() + 1);
    }
    const dateCreatedString = dayCreated + "." + monthCreated + "." + dateCreated.getFullYear();

    // const testArrOfTags: string[] = ["hi"];
    const tagArray: TagType[] = props.currentNote.tags;

    //в целом мне нужно:
    //1) Сначала создать тэг, в момент создания уже должно быть известно его имя, либо я
    //создаю его пустым и потом редачу.
    //2) Добавить возможность прикреплять этот тег к конкретной заметке

    async function CreateTag() {
        console.log(props.currentNote.id);
        const url = "http://localhost:3030/tags";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "name": ""
            }),
            credentials: "include",
        })
        const body = await response.json();
        console.log("body in CreateTag:", body);
        props.getUserTags();
    }

    async function DeleteTag(tagId: number) {
        console.log(props.currentNote.id);
        const url = "http://localhost:3030/tags/" + tagId;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            credentials: "include",
        })
        const body = await response.json();
        props.getUserTags();
    }

    async function UpdateTag(tagId: number, tagName: string) {
        console.log(props.currentNote.id);
        const url = "http://localhost:3030/tags/" + tagId;
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "name": tagName
            }),
            credentials: "include",
        })
        const body = await response.json();
        props.getUserTags();
    }

    return (
        <div className="note-container">
            <div className="flex-input-container">
                {
                    props.currentNote.id === 0 ? <></> : <span><span>{dateCreatedString}</span> <input value={title} type="text" className="note-heading" onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                        <div>List of tags<button onClick={toggleTagPopup}>+</button></div>
                    </span>}
            </div>
            {tagPopupVisible ? <div> {props.userTags.map((tag) => {
                return (<div><button>+</button><input defaultValue={tag.name} id={"tag" + tag.id} key={tag.id} /><button onClick={() => {
                    let currentTagName: string = "";
                    if (document.getElementById("tag" + tag.id)) {
                        currentTagName = document.getElementById("tag" + tag.id).value;
                    }

                    UpdateTag(tag.id, currentTagName);
                }}>save</button><button onClick={() => DeleteTag(tag.id)}>delete</button></div>)
            })}<br></br><button onClick={CreateTag}>create new tag</button></div> : <></>}
            {
                props.currentNote.id === 0 ? <></> : <textarea value={text} className="note-text" onChange={(e) => {
                    setText(e.target.value);
                }} />}
            {props.currentNote.id === 0 ? <></> : <button onClick={handleSaveClick}>Save note</button>}
            {props.currentNote.id === 0 ? <></> : <button onClick={toggleDeletePopup}>Delete note</button>}
            {deletePopupVisible ? <div className="delete-popup">
                <div>
                    <p>are you sure?</p>
                    <button onClick={toggleDeletePopup}>cancel</button>
                    <button onClick={handleDeleteNote} >delete</button>
                </div>
            </div> : <></>}
        </div >
    );
}
