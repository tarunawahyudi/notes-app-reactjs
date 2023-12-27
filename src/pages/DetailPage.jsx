import React from "react";
import {getNote} from "../utils/local-data.js";
import {useParams} from "react-router-dom";
import DetailNote from "../components/DetailNote.jsx";

function DetailPageWrapper() {
    const {id} = useParams();
    return <DetailPage id={id} />
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        }
    }
    render() {
        if (this.state.note === null) {
            return <p>Notes is not found!</p>
        }
        return <DetailNote {...this.state.note} />
    }
}

export default DetailPageWrapper;