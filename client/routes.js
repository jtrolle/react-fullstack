import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import About from './containers/About';

export default (
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
    </div>
)