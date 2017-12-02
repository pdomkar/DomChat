import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import { ChannelListItem } from './ChannelListItem';

export class ChannelList extends React.PureComponent {
    static propTypes = {
        channels: PropTypes.instanceOf(Immutable.List).isRequired,
        email: PropTypes.string.isRequired,
        selectedChannel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            createdBy: PropTypes.string.isRequired,
            users: PropTypes.array.isRequired,
        }),
        loadChannels: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadChannels();
    }

    render() {
        const itemElements = this.props.channels
            .filter(channel => this.props.email === channel.createdBy || channel.users.indexOf(this.props.email) !== -1)
            .map( channel => {
                return (<ChannelListItem key={channel.id} channel={channel} selectedChannel={this.props.selectedChannel}/>);
            });

        return (
            <ul className="channels-list">
                {itemElements}
            </ul>
        );
    }
}