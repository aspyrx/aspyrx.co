/*
 * app.js - Bootstraps the React app using React Router.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

import styles from 'app.less'

import favicon from './images/favicon.ico';

function Logo() {
    return <div className={styles.logo}>
        <div className={styles.icon}>
            <div className={styles.right}>
                <div className={styles.left}>
                    <div className={styles.middle} />
                </div>
            </div>
        </div>
        <div className={styles.logoText}>
            <span>SPYRX</span>.co
        </div>
    </div>;
}

function Header() {
    return <div className={styles.header}>
        <Link to="/"><Logo /></Link>
        <div className={styles.navigation}>
            <Link to="/" activeClassName={styles.active}>home</Link>
        </div>
    </div>;
}

export default class App extends Component {
    static get propTypes() {
        return {
            children: React.PropTypes.node
        };
    }

    componentWillMount() {
        const head = document.getElementsByTagName('head')[0];
        const iconLink = document.createElement('link');
        iconLink.rel = 'shortcut icon';
        iconLink.href = favicon;
        head.appendChild(iconLink);
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

