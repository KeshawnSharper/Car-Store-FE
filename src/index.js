import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import StoreReducer from './components/reducers/StoreReducer';

const persistedState = loadState();
const store = createStore(StoreReducer, persistedState);

store.subscribe(() => {
    saveState({
        cart: store.getState().cart,
        total: store.getState().total,
    })
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));