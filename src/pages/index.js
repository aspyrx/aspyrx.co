/*
 * index.js - Index page for the app.
 */

import React, {Component} from 'react';

import styles from './index.less';

import avatar from '../images/avatar.jpg';

function Project(props) {
    Project.propTypes = {
        project: React.PropTypes.object
    }

    const { project, ...rest } = props;
    const { className, title, href, github } = project;

    function open() {
        if (href) {
            window.open(href);
        }
    }

    return <div onClick={open} title={title} {...rest}>
        <div className={className}>
            { github
                ? <a className="octicon octicon-mark-github"
                    onClick={(evt) => evt.stopPropagation()}
                    href={github}
                    target="_blank"
                    title="View on Github" />
                : <span className="octicon octicon-lock"
                    title="Sorry, this project's source is private!" />
            }
            <h3 className={styles.title}>{title}</h3>
        </div>
    </div>;
}

function Projects(props) {
    const projects = [
        {
            title: 'audiovisual',
            className: styles.audiovisual,
            href: 'http://av.aspyrx.co',
            github: 'https://github.com/aspyrx/audiovisual'
        }, {
            title: 'tictactoe',
            className: styles.tictactoe,
            href: 'http://3t.aspyrx.co',
            github: 'https://github.com/aspyrx/tictactoe'
        }, {
            title: 'Carnegie Mellon Racing',
            className: styles.cmr,
            href: 'https://cmr.aspyrx.co'
        }
    ];

    return <div {...props}>
        {projects.map((project, i) => {
            return <Project className={styles.project}
                key={i}
                project={project} />;
        })}
    </div>;
}

function FacebookIcon() {
    return <a className="facebook-icon"
        href="https://facebook.com/stan.zhang2"
        target="_blank">
        <svg viewBox="0 0 216 216" enable-background="new 0 0 216 216">
            <path d="M204.1,0H11.9C5.3,0,0,5.3,0,11.9v192.2c0,6.6,5.3,11.9,11.9,
                11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9,17-43.1,
                41.9-43.1c11.9,0,22.2,0.9,25.2,1.3v29.2l-17.3,0c-13.5,0-16.2,
                6.4-16.2,15.9v20.8h32.3l-4.2,32.6H149V216h55c6.6,0,11.9-5.3,
                11.9-11.9V11.9C216,5.3,210.7,0,204.1,0z" />
        </svg>
    </a>;
}

function Bio(props) {
    return <div {...props}>
        <a className={styles.avatar}
            href="https://github.com/aspyrx"
            target="_blank">
            <img src={avatar} alt="Stan Zhang" />
            <div />
        </a>
        <div>
            <h1>
                Stan Zhang <a href="https://github.com/aspyrx">
                    <span className="mega-octicon octicon-mark-github" />
                </a>
                <FacebookIcon />
            </h1>
            <h2><a href="https://ece.cmu.edu/" target="_blank">
                    Electrical and Computer Engineering</a> major
                at <a href="https://www.cmu.edu/" target="_blank">
                    Carnegie Mellon University</a>.</h2>
        </div>
    </div>;
}

export default class Index extends Component {
    render() {
        return <div className={styles.container}>
            <Bio className={styles.bio} />
            <Projects className={styles.projects} />
        </div>;
    }
}

