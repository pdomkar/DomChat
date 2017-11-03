import React from 'react';
import { uuid } from '../../utils/uuidGenerator';
import Immutable from 'immutable';

import { ChannelList as ChannelListComponent} from '../../components/channel-list/ChannelList';

class ChannelList extends React.Component {
    constructor() {
        super();

        this.state = {
            list: this._loadInitCahnnels(),
            editedChannelId: null,
            createChannelVisible: false
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if(this.state.list !== nextState.list) {
            localStorage.setItem('channels', JSON.stringify(nextState.list.toJS()));
        }
    }

    _createChannel = (channel) => {
        this.setState((prevState) => ({
            list: prevState.list.push({...channel}), createChannelVisible: false
        }));
    };

    _updateChannel = (channel) => {
        this.setState((prevState) => {
            let newState = {
                editedChannelId: null
            };

            const channelIndex = prevState.list.findIndex(o => o.id === channel.id);
            if(channelIndex >= 0) {
                newState.list = prevState.list.update(channelIndex, prevChannel => ({ ...prevChannel, ...channel }));
            }
            return newState;
        });
    };

    _startEditing = (channelId) => {
        this.setState({
            editedChannelId: channelId
        });
    };

    _cancelEditing = () => {
        this.setState({
            editedChannelId: null
        });
    };

    _startCreating = () => {
        this.setState({
            createChannelVisible: true
        });
    };

    _cancelCreating = () => {
        this.setState({
            createChannelVisible: false
        });
    };

    _getDefaultChannels = () => {
        return Immutable.List([
            {
                id: uuid(),
                name: 'React',
            },
            {
                id: uuid(),
                name: 'Angular',
            },
        ]);
    };

    _loadInitCahnnels = () => {
        const storedChannelsJSON = localStorage.getItem('channels');
        return storedChannelsJSON ? Immutable.List(JSON.parse(storedChannelsJSON)) : this._getDefaultChannels();
    };

    render() {
        return (
            <ChannelListComponent
                list={this.state.list}
                createChannelVisible={this.state.createChannelVisible}
                editedChannelId={this.state.editedChannelId}
                onCreate={this._createChannel}
                onSave={this._updateChannel}
                onStartCreating={this._startCreating}
                onCancelCreating={this._cancelCreating}
                onStartEditing={this._startEditing}
                onCancelEditing={this._cancelEditing}
            />
        );
    }
}

export { ChannelList };