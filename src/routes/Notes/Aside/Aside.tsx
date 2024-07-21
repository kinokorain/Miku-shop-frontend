import NoteType from "../../../Types/Note.ts"

export default function Aside(props: { currentNoteList: NoteType[] }) {
    return (
        <aside>
            <ul className="note-list">
                {props.currentNoteList.map((note) => {
                    return <li>{note.title}</li>
                })}
            </ul>
        </aside>
    );
}
