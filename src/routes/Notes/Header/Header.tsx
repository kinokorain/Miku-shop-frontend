
export default function Header(props: { handleCreatingNote: () => void, handleSearchInput: (e: any) => void, handleSearching: () => void }) {
    return (
        <header className="header">
            <div>
                <input type="search" onChange={props.handleSearchInput} />
                <button onClick={props.handleSearching}>sewch</button>
            </div>
            <div className="flex">
                <button onClick={props.handleCreatingNote}>+</button>
                <div>fiwters</div>
            </div>
        </header >
    );
}
