import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { ChannelList as ChannelListComponent} from '../../../components/app/channels/ChannelList';

class ChannelList extends React.Component {
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

    constructor() {
        super();

        this.state = {
        };
    }


    render() {
        return (
            <ChannelListComponent
                channels={this.props.channels}
                email={this.props.email}
                selectedChannel={this.props.selectedChannel}
                loadChannels={this.props.loadChannels}
            />
        );
    }
}

export { ChannelList };