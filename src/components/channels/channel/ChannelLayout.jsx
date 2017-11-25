import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
// import { CSSTransition } from 'react-transition-group';

import { Header } from './header/Header';
import { Body } from '../../../containers-redux/channels/channel/body/Body';
import { List } from 'immutable';

export class ChannelLayout extends React.PureComponent {
    static propTypes = {
        channel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            createdBy: PropTypes.string.isRequired,
        }).isRequired,
        onDelete: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        console.log("con",props.channel);
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="channel">
                {this.props.channel && <Header channel={this.props.channel} onDelete={this.props.onDelete}/>}
                {this.props.channel && <Body channel={this.props.channel}/>}
            </div>
        );
    }
}