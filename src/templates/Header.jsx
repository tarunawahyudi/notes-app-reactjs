import React from "react";
import {Link} from "react-router-dom";

function Header({ title }) {
    return (
        <header>
            <h1>
                <Link to="/">{title}</Link>
            </h1>
            <div className="navigation">
                <ul>
                    <li>Arsip</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;