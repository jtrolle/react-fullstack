import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';

export default (
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
    </div>
)