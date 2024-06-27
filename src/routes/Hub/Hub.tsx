import React from "react";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Note from "./Note/Note";

export default function Hub() {
    return (
        <>
            <Header />
            <div className="flex">
                <Aside />
                <Note />
            </div>
        </>
    );
}
