import React, {useEffect, useState} from "react";
import NoteList from "../components/NoteList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ActionButton from "../components/ActionButton.jsx";
import {getAllNotes} from "../utils/local-data.js";

function Homepage() {

    const [notes, setNote] = useState([]);

    useEffect(() => {
        async function fetchNotes() {

        }
    }, [notes]);
    // const notes = getAllNotes()

    return (
        <>
            <SearchBar />
            { notes.length === 0 && <p>Ups sorry 😖 Notes Empty...</p>}
            <NoteList />
            <div className="homepage__action">
                <ActionButton target="/notes/new" icon="plus" />
            </div>
        </>
    )
}

export default Homepage;