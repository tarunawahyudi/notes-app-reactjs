import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import LogoutButton from "../components/LogoutButton.jsx";

function Header({ title, logout }) {
    return (
        <header>
            <h1>
                <Link to="/">{title}</Link>
            </h1>
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="/arsip">
                            <span>Arsip</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <LogoutButton onLogout={logout} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;