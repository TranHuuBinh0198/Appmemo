import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,compose ,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import appReducers from './Reducers/index';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    appReducers,
    composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,

document.getElementById('root'));
registerServiceWorker();

