import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { ChannelList as ChannelListComponent} from '../../components/channels/ChannelList';

class ChannelList extends React.Component {
    static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        email: PropTypes.string.isRequired,
        editedChannelId: PropTypes.string,
        createChannelVisible: PropTypes.bool.isRequired,
        loadChannels: PropTypes.func.isRequired,
        onStartEditing: PropTypes.func.isRequired,
        onStartCreating: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        save: PropTypes.func.isRequired,
    };

    constructor() {
        super();

        this.state = {
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if(this.state.list !== nextState.list) {
            this.props.save();
        }
    }

    render() {
        return (
            <ChannelListComponent
                list={this.props.list}
                email={this.props.email}
                createChannelVisible={this.props.createChannelVisible}
                editedChannelId={this.props.editedChannelId}
                loadChannels={this.props.loadChannels}
                onStartCreating={this.props.onStartCreating}
                onStartEditing={this.props.onStartEditing}
                onDelete={this.props.onDelete}
            />
        );
    }
}

export { ChannelList };