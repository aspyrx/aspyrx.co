/*
 * index.js - Entry point for the app.
 */

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './app.js';
import Index from './pages/index.js';

render(<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
    </Route>
</Router>, document.getElementById("app"));

