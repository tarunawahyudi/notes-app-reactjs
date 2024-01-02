import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function LoginHeader({ title }) {
    return (
        <header>
            <h1>
                <Link to="/">{title}</Link>
            </h1>
        </header>
    )
}


export default LoginHeader;