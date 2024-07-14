
export default function Header(props: { handleCreatingNote: () => void }) {
    return (
        <header className="header">
            <div>
                <input type="search" />
                <button>sewch</button>
            </div>
            <div className="flex">
                <button onClick={props.handleCreatingNote}>+</button>
                <div>fiwters</div>
            </div>
        </header >
    );
}
