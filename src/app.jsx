require.context('../static/', true);
import '../node_modules/font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDom from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import { app } from './reducers/app';
import { getInitialState } from './utils/getInitialState';
import { ChannelListRedux } from './containers-redux/channel-list/ChannelList';

import './main.less';

const thunk = require('redux-thunk').default;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, logger];
const store = createStore(app, getInitialState(), composeEnhancers(
    applyMiddleware(...middleware)
));
import { SavingStatus } from './containers-redux/channel-list/SavingStatus';

console.log('Initial state: ', store.getState());

class MyComponent extends React.Component {
    render() {
        return (
            <div className="channels-layout">
                <div className="sidebar-container">
                    <div className="header">
                        <h2>DomChat</h2>
                        <span>petrdomkar</span>
                        {/*<Link to="/profile"><i className="fa fa-user" aria-hidden="true"/></Link>*/}
                        {/*<Link to="/"><i className="fa fa-sign-out" aria-hidden="true"/></Link>*/}
                        <SavingStatus />
                    </div>
                    <div className="body">
                        <ChannelListRedux />
                    </div>
                </div>
                <div className="channel">
                    <div className="header">
                        <h3>Channel df 1</h3>
                        <span><i className="fa fa-users" aria-hidden="true"/> 14</span>
                        <a><i className="fa fa-edit" aria-hidden="true"/></a>
                        <a><i className="fa fa-trash" aria-hidden="true"/></a>
                    </div>
                    <div className="body">
                        <div className="messages">
                            bb
                            bb
                        </div>
                        <div className="footer">
                            <input type="text"/><button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(
    <Provider store={store}>
        <MyComponent />
    </Provider>,
    document.getElementById('app'));