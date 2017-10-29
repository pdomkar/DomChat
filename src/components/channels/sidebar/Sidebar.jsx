import * as React from 'react';
import {Link} from 'react-router-dom';


const Sidebar = () => (
    <div className="sidebar-container">
        <div className="header">
            <h2>DomChat</h2>
            <span>petrdomkar</span>
            <Link to="/profile"><i className="fa fa-user" aria-hidden="true"/></Link>
            <Link to="/"><i className="fa fa-sign-out" aria-hidden="true"/></Link>
        </div>
        <div className="body">
            <h3>Channels <i className="fa fa-plus" aria-hidden="true"/></h3>
            <ul>
                <li><i className="fa fa-comments-o" aria-hidden="true"/> Channel df 1</li>
                <li><i className="fa fa-comments-o" aria-hidden="true"/> Channel 2</li>
                <li><i className="fa fa-comments-o" aria-hidden="true"/> Channel d fd 3</li>
                <li><i className="fa fa-comments-o" aria-hidden="true"/> Channel df 4</li>
                <li><i className="fa fa-comments-o" aria-hidden="true"/> Channel 5</li>
            </ul>
        </div>
    </div>

);
export { Sidebar };