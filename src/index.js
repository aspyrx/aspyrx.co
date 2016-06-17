/*
 * index.js - Entry point for the app.
 */

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

import App from './app';
import Home from './pages/home';
import Projects from './pages/projects';

render(<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRedirect to="home" />
        <Route path="home" component={Home} />
        <Route path="projects" component={Projects} />
    </Route>
</Router>, document.getElementById("app"));

