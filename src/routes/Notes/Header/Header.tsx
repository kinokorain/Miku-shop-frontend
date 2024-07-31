
export default function Header(props: { handleCreatingNote: () => void, handleSearchInput: (e: any) => void, handleSearching: (e) => void }) {
    return (
        <header className="header">
            <form>
                <input type="search" onChange={props.handleSearchInput} />
                <button type="submit" onClick={(e) => props.handleSearching(e)}>sewch</button>
            </form>
            <div className="flex">
                <button onClick={props.handleCreatingNote}>+</button>
                <div>fiwters</div>
            </div>
        </header >
    );
}
