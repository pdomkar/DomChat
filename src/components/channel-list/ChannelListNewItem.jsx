import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from '../../utils/uuidGenerator';
import { ChannelListEditedItem } from '../../containers/channel-list/ChannelListEditedItem';

export class ChannelListNewItem extends React.Component {
    static propTypes = {
        onCreate: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    emptyChannel = {
        id: uuid(),
        name: ''
    };

    render() {
        return (
            <ChannelListEditedItem
                channel={this.emptyChannel}
                submitButtonText="Create"
                onCancel={this.props.onCancel}
                onSubmit={this.props.onCreate}
            />
        );
    }
}