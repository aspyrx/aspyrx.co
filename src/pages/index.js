/*
 * index.js - Index page for the app.
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import {GithubIcon, FacebookIcon} from '../components/icons.js';

import styles from './index.less';

import avatar from '../images/avatar.jpg';

function Project(props) {
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
                ? <GithubIcon onClick={(evt) => evt.stopPropagation()}
                    className={styles.icon}
                    href={github}
                    title="View on Github" />
                : <span className={classNames('mega-octicon',
                                              'octicon-lock',
                                              styles.icon)}
                    title="Sorry, this project's source is private!" />
            }
            <h3 className={styles.title}>{title}</h3>
        </div>
    </div>;
}

Project.propTypes = {
    project: React.PropTypes.object
}

function Projects(props) {
    const projects = [
        {
            title: 'audiovisual',
            className: styles.audiovisual,
            href: 'https://av.aspyrx.co',
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
                <span>Stan Zhang</span>
                <GithubIcon />
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

