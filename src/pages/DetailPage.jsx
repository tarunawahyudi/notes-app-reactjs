import React from "react";
import {deleteNote, getNote} from "../utils/network-data.js";
import {useNavigate, useParams} from "react-router-dom";
import DetailNote from "../components/DetailNote.jsx";
import ActionButton from "../components/ActionButton.jsx";
import PropTypes from "prop-types";

function DetailPageWrapper() {
    const {id} = useParams();
    const redirect = useNavigate();
    return <DetailPage id={id} redirect={redirect} />
}

class DetailPage extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired
    };

    state = {
        note: null
    }

    componentDidMount() {
        this.getNoteData();
    }

    getNoteData = async () => {
        const {data} = await getNote(this.props.id);
        this.setState({ note: data });
    };

    onDeleteHandler = async () => {
        const { error } = await deleteNote(this.props.id);
        if (!error) {
            this.setState({note: null});
            this.props.redirect('/');
        }
    }
    render() {
        if (this.state.note === null) {
            return <p>Notes is not found!</p>
        }
        return (
            <>
                <DetailNote {...this.state.note} />
                <div className="detail-page__action">
                    <ActionButton icon="trash" handler={this.onDeleteHandler}/>
                    <ActionButton icon="archive" target="/"/>
                </div>
            </>
        )
    }
}
export default DetailPageWrapper;