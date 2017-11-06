import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { ChannelList as ChannelListComponent} from '../../components/channel-list/ChannelList';

class ChannelList extends React.Component {
    static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        editedChannelId: PropTypes.string,
        createChannelVisible: PropTypes.bool.isRequired,
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
                createChannelVisible={this.props.createChannelVisible}
                editedChannelId={this.props.editedChannelId}
                onStartCreating={this.props.onStartCreating}
                onStartEditing={this.props.onStartEditing}
                onDelete={this.props.onDelete}
            />
        );
    }
}

export { ChannelList };