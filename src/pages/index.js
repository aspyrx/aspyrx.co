/*
 * index.js - Index page for the app.
 */

import React, {Component} from 'react';

import styles from './index.less';

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

    return <div className={styles.project}
        onClick={open}
        title={title}
        {...rest}>
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
            title: 'tictactoe',
            className: styles.tictactoe,
            href: 'http://3t.aspyrx.co',
            github: 'https://github.com/aspyrx/tictactoe'
        }, {
            title: 'audiovisual',
            className: styles.audiovisual,
            href: 'http://av.aspyrx.co',
            github: 'https://github.com/aspyrx/audiovisual'
        }, {
            title: 'Carnegie Mellon Racing',
            className: styles.cmr,
            href: 'https://cmr.aspyrx.co'
        }
    ];

    return (
        <div className={styles.projects} {...props}>
            {projects.map((project, i) => {
                return <Project key={i} project={project} />;
            })}
        </div>
    )
}

export default class Index extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Projects />
            </div>
        );
    }
}

