import React from "react";
import {deleteNote, getNote} from "../utils/local-data.js";
import {useParams} from "react-router-dom";
import DetailNote from "../components/DetailNote.jsx";
import ActionButton from "../components/ActionButton.jsx";

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

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler() {
        deleteNote(this.props.id);
    }
    render() {
        if (this.state.note === null) {
            return <p>Notes is not found!</p>
        }
        return (
            <>
                <DetailNote {...this.state.note} />
                <div className="detail-page__action">
                    <ActionButton icon="trash" target="/" handler={this.onDeleteHandler}/>
                    <ActionButton icon="archive" target="/"/>
                </div>
            </>
        )
    }
}

export default DetailPageWrapper;