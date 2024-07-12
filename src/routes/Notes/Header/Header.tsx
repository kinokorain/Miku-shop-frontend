import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div>
                <input type="search" />
                <button>search</button>
            </div>
            <div className="flex">
                <button>+</button>
                <div>filters</div>
            </div>
        </header>
    );
}
