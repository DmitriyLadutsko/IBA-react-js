import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import cardsReducer from "./store/reducers/cards";
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
    cards: cardsReducer,
    auth: authReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action)
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();