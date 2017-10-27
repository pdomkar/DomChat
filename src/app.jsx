require.context('../static/', true);

import ReactDom from 'react-dom';
import React from 'react';
import { LayoutSelector } from './components/LayoutSelector.jsx';

class MyComponent extends React.Component {
    render() {
        return (
            <LayoutSelector />
        );
    }
}

ReactDom.render(<MyComponent/>, document.getElementById('app'));