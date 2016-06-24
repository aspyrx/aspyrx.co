/*
 * index.js - Entry point for the app.
 */

import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';
import browserHistory from 'react-router/lib/browserHistory';

import App from '~/app';
import pages from '~/pages';

render(<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRedirect to={pages.indexPath} />
        {pages.map(([Page, path], i) => {
            return <Route key={i} path={path} component={Page} />
        })}
    </Route>
</Router>, document.getElementById("app"));

