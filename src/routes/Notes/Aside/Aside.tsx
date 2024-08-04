import NoteType from "../../../Types/Note.ts"

export default function Aside(props: { currentNoteList: NoteType[], handleChoosingNote: (note: NoteType) => void }) {

    //highliting the chosen li element
    const noteListItems = document.querySelectorAll(".note-list-item");
    noteListItems.forEach((element) => {
        element.addEventListener("click", () => {
            noteListItems.forEach((element) => {
                element.classList.remove("active-note")
            })
            element.classList.add("active-note");
        });
    })

    return (
        <aside>
            <ul className="note-list">
                {props.currentNoteList.map((note) => {
                    if (note.title == "") {
                        return <li key={note.id} className="note-list-item" onClick={() => {
                            props.handleChoosingNote(note);
                        }}>-</li>
                    }
                    else {
                        return <li key={note.id} className="note-list-item" onClick={() => {
                            props.handleChoosingNote(note);

                        }}>{note.title}</li>
                    }
                })}
            </ul>
        </aside>
    );
}
