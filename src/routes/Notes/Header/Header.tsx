import { useState } from "react";

export default function Header(props: { sortType: boolean, handleSortTypeChange: () => void, handleSortByChange: (sort: string) => void, handleCreatingNote: () => void, handleSearchInput: (e: any) => void, handleSearching: (e) => void }) {
    const [popupSortingVisible, setPopupSortingVisible] = useState<boolean>(false);
    const [popupFilteringVisible, setPopupFilteringVisible] = useState<boolean>(false);


    return (
        <header className="header" onClick={() => {
            const noteListItems = document.querySelectorAll(".note-list-item");
            noteListItems.forEach((element) => {
                element.classList.remove("active-note")
            })
        }}>
            <div>
                <button onClick={() => setPopupSortingVisible(!popupSortingVisible)}><i className="fa-solid fa-sort"></i>sorting</button>
                <div className="sort-buttons-container">
                    {
                        popupSortingVisible ?
                            props.sortType ? <button onClick={props.handleSortTypeChange}><i className="fa-solid fa-sort-up"></i>ascending</button> : <button onClick={props.handleSortTypeChange}><i className="fa-solid fa-sort-down"></i>descending</button>
                            : <></>
                    }
                    {popupSortingVisible ? <div><button onClick={() => props.handleSortByChange("date")}>by date</button><button onClick={() => props.handleSortByChange("date_modif")}>by date modified</button></div> : <></>}
                </div>
                <button onClick={() => setPopupFilteringVisible(!popupFilteringVisible)}><i className="fa-solid fa-filter"></i>filtering</button>
                <div className="filter-buttons-container">
                    {
                        popupFilteringVisible ? <div>
                            <div>date sliders</div>
                            <div>date_modif sliders</div>
                            <div>tag filtering</div>
                        </div> : <></>

                    }
                </div>
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
