import React from 'react';
import {Link} from 'react-router';

import styles from './header.less';

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

export default function Header(props) {
    const { pages } = props;
    return <div className={styles.header}>
        <Link to="/home"><Logo /></Link>
        <div className={styles.navigation}>
            {pages.map(([Page, pathname, title], i) => {
                return <Link key={i}
                    to={pathname}
                    activeClassName={styles.active}>
                    {title}
                </Link>;
            })}
        </div>
    </div>;
}

Header.propTypes = {
    pages: React.PropTypes.arrayOf(React.PropTypes.array)
}

