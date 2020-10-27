import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { CardContextProvider } from './context/Context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <CardContextProvider>
    <App />
  </CardContextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
