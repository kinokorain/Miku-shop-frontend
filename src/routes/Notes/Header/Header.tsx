import { useState } from "react";

export default function Header(props: { sortType: boolean, handleSortTypeChange: () => void, handleSortByChange: (sort: string) => void, handleCreatingNote: () => void, handleSearchInput: (e: any) => void, handleSearching: (e) => void }) {
    const [popupVisible, setPopupVisible] = useState<boolean>(false)

    return (
        <header className="header">
            <div>
                {props.sortType ? <button onClick={props.handleSortTypeChange}><i className="fa-solid fa-sort-up"></i></button> : <button onClick={props.handleSortTypeChange}><i className="fa-solid fa-sort-down"></i></button>}
                <button onClick={() => setPopupVisible(!popupVisible)}><i className="fa-solid fa-filter"></i></button>
                {popupVisible ? <div><button onClick={() => props.handleSortByChange("date")}>by date</button><button onClick={() => props.handleSortByChange("date_modif")}>by date modified</button></div> : <></>}
            </div>
            <form>
                <input type="search" onChange={props.handleSearchInput} />
                <button type="submit" onClick={(e) => props.handleSearching(e)}>sewch</button>
            </form>
            <div className="flex">
                <button onClick={props.handleCreatingNote}>+create note</button>
            </div>
        </header >
    );
}
