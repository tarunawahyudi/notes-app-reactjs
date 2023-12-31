import React from "react";
import LoginPage from "../../pages/LoginPage.jsx";

class ApplicationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false
        }

        this.bindMethods();
        this.authValidation();
    }

    bindMethods() {
        Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .filter(prop => typeof this[prop] === 'function' && prop !== 'constructor')
            .forEach(method => {
                this[method] = this[method].bind(this);
            });
    }

    authValidation() {
        if (!this.state.isLogged) {
            console.log('Anda belum login');
        }
    }
}

export default ApplicationPage;