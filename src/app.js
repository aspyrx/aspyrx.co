/*
 * app.js - Bootstraps the React app using React Router.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

import styles from 'app.less'

function Logo() {
    return <div className={styles.logo}>
        <div className={styles.right}>
            <div className={styles.left}>
                <div className={styles.middle} />
            </div>
        </div>
    </div>;
}

function Header() {
    return <div className={styles.header}>
        <Logo />
        <div className={styles.logoText}>
            <span>SPYRX.CO</span>
        </div>
        <div className={styles.navigation}>
            <Link to="/" activeClassName="active">home</Link>
        </div>
    </div>;
}

export default class App extends Component {
    static get propTypes() {
        return {
            children: React.PropTypes.node
        };
    }

    render() {
        return (
            <div className={styles.container}>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

