import React from 'react';
import { string, shape, arrayOf } from 'prop-types';
import { Link, NavLink }  from 'react-router-dom';

import styles from './Header.less';

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

function HeaderLink(props) {
    const { config: { path, title }, ...rest } = props;
    return <NavLink key={path}
        to={path}
        exact={path === '/'}
        activeClassName={styles.active}
        {...rest}
    >
        {title}
    </NavLink>;
}

HeaderLink.propTypes = {
    config: shape({
        path: string.isRequired,
        title: string.isRequired
    }).isRequired
};

export default function Header(props) {
    const links = props.locations.map(config => {
        return <HeaderLink key={config.path} config={config} />;
    });

    return <header className={styles.header}>
        <Link to='/'><Logo /></Link>
        <nav className={styles.navigation}>
            {links}
        </nav>
    </header>;
}

Header.propTypes = {
    locations: arrayOf(shape({
        path: string.isRequired,
        title: string.isRequired
    })).isRequired
};

