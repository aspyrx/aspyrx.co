import React, {Component} from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import Header from './components/header';

import styles from 'app.less'

import favicon from './images/favicon.ico';
import bg from './images/bg.svg';

export default class App extends Component {
    static get propTypes() {
        return {
            children: React.PropTypes.node,
            location: React.PropTypes.object
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
        const { location: { pathname }, children } = this.props;

        return <div className={styles.containers}>
            <object className={styles.bg} data={bg} type="image/svg+xml" />
            <div className={styles.container}>
                <Header />
            </div>
            <div className={styles.container}>
                <ReactCSSTransitionReplace transitionName={{
                    enter: styles.enterInc,
                    enterActive: styles.enterIncActive,
                    leave: styles.leaveInc,
                    leaveActive: styles.leaveIncActive,
                    appear: styles.appearInc,
                    appearActive: styles.appearIncActive
                }}
                transitionAppear={true}
                transitionAppearTimeout={300}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={300}
                overflowHidden={false}>
                {children
                    ? React.cloneElement(children, { key: pathname })
                    : null
                }
                </ReactCSSTransitionReplace>
            </div>
        </div>;
    }
}

