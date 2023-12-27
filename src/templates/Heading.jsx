import React from "react";

function Heading({ title }) {
    return (
        <header>
            <h1>{title}</h1>
            <div className="navigation">
                <ul>
                    <li>Arsip</li>
                </ul>
            </div>
        </header>
    )
}

export default Heading;