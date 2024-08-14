import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import DatePicker from "../../../Components/DatePicker";

export default function Header(props: { handleResetfiltering: () => void, handleFiltering: () => void, handleDateRangeChange: (startDate: number, endDate: number) => void, sortType: boolean, handleSortTypeChange: () => void, handleSortByChange: (sort: string) => void, handleCreatingNote: () => void, handleSearchInput: (e: any) => void, handleSearching: (e) => void }) {
    const [popupSortingVisible, setPopupSortingVisible] = useState<boolean>(false);
    const [popupFilteringVisible, setPopupFilteringVisible] = useState<boolean>(false);

    const handleDateRangeChange = props.handleDateRangeChange;

    return (
        <header className="header" onClick={() => {
            const noteListItems = document.querySelectorAll(".note-list-item");
            noteListItems.forEach((element) => {
                element.classList.remove("active-note")
            })
        }}>
            <div style={{ position: "relative" }}>
                <button className="header-button" onClick={() => setPopupSortingVisible(!popupSortingVisible)}><i className="fa-solid fa-sort"></i>sorting</button>
                {popupSortingVisible ? <div className="sort-buttons-container">
                    {
                        props.sortType ? <button onClick={props.handleSortTypeChange}><i className="fa-solid fa-sort-up"></i>ascending</button> : <button onClick={props.handleSortTypeChange}><i className="fa-solid fa-sort-down"></i>descending</button>
                    }

                    <button onClick={() => props.handleSortByChange("date")}>by date</button><button onClick={() => props.handleSortByChange("date_modif")}>by date modified</button>

                </div> : <></>}
                <button className="header-button" onClick={() => setPopupFilteringVisible(!popupFilteringVisible)}><i className="fa-solid fa-filter"></i>filtering</button>
                {popupFilteringVisible ? <div className="filter-buttons-container">
                    <div><DatePicker handleDateRangeChange={handleDateRangeChange} /></div>
                    <div>date_modif sliders</div>
                    <div>tag filtering</div>
                    <button onClick={props.handleFiltering}>Go!</button>
                    <button onClick={props.handleResetfiltering}>Reset filters</button>
                </div> : <></>}
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
