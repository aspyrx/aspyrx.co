import React, {Component} from 'react';
import Header from './components/header';

import styles from 'app.less'

import favicon from './images/favicon.ico';

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
        return <div className={styles.containers}>
            <div className={styles.container}>
                <Header />
            </div>
            <div className={styles.container}>
                {this.props.children}
            </div>
        </div>;
    }
}

