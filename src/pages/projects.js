import React from 'react';
import classNames from 'classnames';
import {GithubIcon} from '../components/icons';

import styles from './projects.less';

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

export default function Projects(props) {
    const { className } = props;
    const classes = classNames(className, styles.projects);
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

    return <div className={classes} {...props}>
        {projects.map((project, i) => {
            return <Project className={styles.project}
                key={i}
                project={project} />;
        })}
    </div>;
}

Projects.propTypes = {
    className: React.PropTypes.any
}

