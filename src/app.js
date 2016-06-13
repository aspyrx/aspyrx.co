/*
 * app.js - Bootstraps the React app using React Router.
 */

import React, {Component} from 'react';

import styles from 'app.less'

export default class App extends Component {
    static get propTypes() {
        return {
            children: React.PropTypes.node
        };
    }

    render() {
        return (
            <div className={styles.container}>
                {this.props.children}
            </div>
        );
    }
}

