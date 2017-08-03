import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import newsReducer from './redux/reducers/NewsReducer';
import pageUIReducer from './redux/reducers/PageUIReducer';
import { Provider } from 'react-redux';
import PageLayout from './components/page-layout/PageLayout';
import { BrowserRouter, } from 'react-router-dom';


const reducer = combineReducers({
    news: newsReducer,
    page: pageUIReducer,
});


const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PageLayout/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


registerServiceWorker();