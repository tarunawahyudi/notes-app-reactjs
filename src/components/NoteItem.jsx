import React from "react";
import {showFormattedDate} from "../utils/index.js";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
function NoteItem({ title, body, createdAt, archived, id }) {

    return (
        <article className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </article>
    )
}

NoteItem.proptypes = {
    title: PropTypes.string.isRequired
}

export default NoteItem;