import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../../../containers-redux/app/channels/channel/header/Header';
import { Body } from '../../../../containers-redux/app/channels/channel/body/Body';

export class ChannelLayout extends React.PureComponent {
    static propTypes = {
        channel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            createdBy: PropTypes.string.isRequired,
            users: PropTypes.array.isRequired,
        }).isRequired,
    };

    render() {
        return (
            <div className="channel">
                {this.props.channel && <Header channel={this.props.channel}/>}
                {this.props.channel && <Body channel={this.props.channel}/>}
            </div>
        );
    }
}