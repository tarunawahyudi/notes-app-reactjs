import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(fas);
function ActionButton({ target, icon, handler }) {

    const selectedIcon = icon ? icon : 'question';

    return (
            <Link to={target}>
                <button className="action" type="button" onClick={handler}>
                    <FontAwesomeIcon icon={['fas', selectedIcon]} />
                </button>
            </Link>
    )
}

export default ActionButton;