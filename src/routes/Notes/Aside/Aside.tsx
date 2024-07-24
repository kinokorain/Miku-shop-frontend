import NoteType from "../../../Types/Note.ts"

export default function Aside(props: { currentNoteList: NoteType[], handleChoosingNote: (note: NoteType) => void }) {
    console.log(document.getElementsByClassName("note-list-item"));

    return (
        <aside>
            <ul className="note-list">
                {props.currentNoteList.map((note) => {
                    if (note.title == "") {
                        return <li className="note-list-item" onClick={() => {
                            props.handleChoosingNote(note);
                        }}>-</li>
                    }
                    else {
                        return <li className="note-list-item" onClick={() => {
                            props.handleChoosingNote(note);

                        }}>{note.title}</li>
                    }
                })}
            </ul>
        </aside>
    );
}
