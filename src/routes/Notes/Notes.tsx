import React from "react";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Note from "./Note/Note";
import './Notes.css'

export default function Notes() {
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
