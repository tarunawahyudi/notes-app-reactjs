import React from "react";
import NoteItem from "./NoteItem";
import { getAllNotes } from "../utils/local-data";

class NoteList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes()
        }
    }

    render() {
        return (
            <section className="notes-list">
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
            </section>
        )
    }
}

export default NoteList;