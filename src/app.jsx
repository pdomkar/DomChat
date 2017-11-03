require.context('../static/', true);
import '../node_modules/font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDom from 'react-dom';

import { ChannelList } from './containers/channel-list/ChannelList';

import './main.less';

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
                    </div>
                    <div className="body">
                        <ChannelList/>
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

ReactDom.render(<MyComponent/>, document.getElementById('app'));