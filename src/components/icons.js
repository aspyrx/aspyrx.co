import React from 'react';
import classNames from 'classnames';

import styles from './icons.less';

export function GithubIcon(props) {
    const { className, ...rest } = props;
    const classes = classNames(
        'mega-octicon',
        'octicon-mark-github',
        className
    );

    return <a className={classes} {...rest} />
}

GithubIcon.propTypes = {
    className: React.PropTypes.any
};

GithubIcon.defaultProps = {
    href: 'https://github.com/aspyrx',
    target: '_blank'
};

export function FacebookIcon(props) {
    return <a className={styles.facebookIcon} {...props}>
        <svg viewBox="0 0 216 216" enable-background="new 0 0 216 216">
            <path d="M204.1,0H11.9C5.3,0,0,5.3,0,11.9v192.2c0,6.6,5.3,11.9,11.9,
                11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9,17-43.1,
                41.9-43.1c11.9,0,22.2,0.9,25.2,1.3v29.2l-17.3,0c-13.5,0-16.2,
                6.4-16.2,15.9v20.8h32.3l-4.2,32.6H149V216h55c6.6,0,11.9-5.3,
                11.9-11.9V11.9C216,5.3,210.7,0,204.1,0z" />
        </svg>
    </a>;
}

FacebookIcon.defaultProps = {
    href: 'https://www.facebook.com/stan.zhang2',
    target: '_blank'
};

