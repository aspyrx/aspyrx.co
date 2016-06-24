/*
 * home.js - Home page for the app.
 */

import React from 'react';
import {GithubIcon, FacebookIcon} from '~/components/icons';

import styles from './home.less';

import avatar from '~/images/avatar.jpg';

function Bio(props) {
    return <div className={styles.bio} {...props}>
        <a className={styles.avatar}
            href="https://github.com/aspyrx"
            target="_blank">
            <img src={avatar} alt="Stan Zhang" />
        </a>
        <div className={styles.text}>
            <h1>Stan Zhang</h1>
            <h2>
                <a href="https://ece.cmu.edu/" target="_blank">
                    Electrical and Computer Engineering
                </a>
                &nbsp;major at&nbsp;
                <a href="https://www.cmu.edu/" target="_blank">
                    Carnegie Mellon University
                </a>
                .
            </h2>
            <span className={styles.icons}>
                <GithubIcon />
                <FacebookIcon />
            </span>
        </div>
    </div>;
}

export default function Home(props) {
    return <div className={styles.home} {...props}>
        <Bio />
    </div>;
}

