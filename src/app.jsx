require.context('../static/', true);
import '../node_modules/font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { LayoutSelector } from './components/LayoutSelector.jsx';

class MyComponent extends React.Component {
    render() {
        return (
            <Router>
                <LayoutSelector />
            </Router>
        );
    }
}

ReactDom.render(<MyComponent/>, document.getElementById('app'));