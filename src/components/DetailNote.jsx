import React from "react";
import {showFormattedDate} from "../utils/index.js";

function DetailNote({title, createdAt, body}) {
    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">
                {body}
            </div>
        </section>
    )
}

export default DetailNote;