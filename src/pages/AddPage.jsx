import React from "react";
import ActionButton from "../components/ActionButton.jsx";
import {addNote} from "../utils/local-data.js";

class AddPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onSaveHandler = this.onSaveHandler.bind(this);
        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    }

    onChangeTitleHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        })
    }

    onChangeBodyHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSaveHandler() {

        if (!this.state.title || !this.state.body) {
            return alert('Title and body must not blank');
        }

        addNote(this.state);
    }

    render() {

        return (
            <section className="add-new-page">
                <div className="add-new-page__input">
                    <input
                        name="input-field__title"
                        className="add-new-page__input__title"
                        value={this.state.title}
                        onChange={this.onChangeTitleHandler}
                        placeholder="Catatan rahasia" />
                    <textarea
                        name="textarea-field__body"
                        className="add-new-page__input__body"
                        value={this.state.body}
                        onChange={this.onChangeBodyHandler}
                        placeholder="Sebenarnya saya adalah ....">
                </textarea>
                </div>
                <div className="add-new-page__action">
                    <ActionButton
                        icon="check"
                        target="/"
                        handler={this.onSaveHandler}/>
                </div>
            </section>
        )
    }
}

export default AddPage;