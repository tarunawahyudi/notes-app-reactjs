import React from "react";
import NoteItem from "./NoteItem";
import { getAllNotes } from "../utils/local-data";

function NoteList() {
    const allNotes = getAllNotes();
    return (
        <section className="notes-list">
            { allNotes.map((note) => (<NoteItem key={note.id} {...note} />)) }
        </section>
    )
}

export default NoteList;