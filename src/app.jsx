require.context('../static/', true);
import '../node_modules/font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { LayoutSelector } from './containers-redux/LayoutSelector';
import './main.less';
import 'react-select/dist/react-select.css';
import { createHistory } from './utils/createHistory';
import { createStore } from './utils/createStore';

const history = createHistory();
const store = createStore(history);

console.log('Initial state: ', store.getState());

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LayoutSelector/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app'));