import React, {useContext, useEffect, useState} from "react";
import NoteList from "../components/NoteList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ActionButton from "../components/ActionButton.jsx";
import {getActiveNotes} from "../utils/network-data.js";

function Homepage() {

    const [notes, setNote] = useState([]);
    const [init, setInit] = useState(true);

    useEffect(() => {
        getActiveNotes().then(res => {
            setNote(res.data);
            setInit(false);
        });
    }, []);

    if (init) {
        return null;
    }

    return (
        <>
            <SearchBar />
            { notes.length === 0 && <p>Ups sorry 😖 Notes Empty...</p>}
            <NoteList notes={notes}/>
            <div className="homepage__action">
                <ActionButton target="/notes/new" icon="plus" />
            </div>
        </>
    )
}

export default Homepage;