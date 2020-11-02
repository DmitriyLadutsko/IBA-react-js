import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import { CardContextProvider } from './context/Context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <CardContextProvider>
            <App />
        </CardContextProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
