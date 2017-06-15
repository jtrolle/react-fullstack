import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './containers/App';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));