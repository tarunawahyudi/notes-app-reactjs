import React from "react";
import NoteList from "../components/NoteList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ActionButton from "../components/ActionButton.jsx";

function Homepage() {
    return (
        <>
            <SearchBar />
            <NoteList />
            <div className="homepage__action">
                <ActionButton target="/notes/new" icon="plus" />
            </div>
        </>
    )
}

export default Homepage;