import React from "react";

class ApplicationPage extends React.Component {

    bindMethods() {
        Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .filter(prop => typeof this[prop] === 'function' && prop !== 'constructor')
            .forEach(method => {
                this[method] = this[method].bind(this);
            });
    }

    componentDidMount() {
        this.bindMethods();
    }
}

export default ApplicationPage;