import React from "react";
import NoteList from "../components/NoteList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import AddButton from "../components/AddButton.jsx";

function Homepage() {
    return (
        <>
            <SearchBar />
            <NoteList />
            <AddButton />
        </>
    )
}

export default Homepage;