import React from 'react';
import PropTypes from 'prop-types';
import { ChannelListEditedItem as ChannelListEditedItemComonent } from '../../../components/channels/channel-list/ChannelListEditedItem';

export class ChannelListEditedItem extends React.Component {
    static propTypes = {
        channel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        submitButtonText: PropTypes.string.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        valid: PropTypes.bool.isRequired,
        dirty: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            editedChannel: props.channel
        };
    }


    render() {
        return (
            <ChannelListEditedItemComonent
                editedChannel={this.state.editedChannel}
                submitDisabled={this.state.editedChannel === this.props.channel}
                submitButtonText={this.props.submitButtonText}
                onCancel={this.props.onCancel}
                onSubmit={() => this.props.onSubmit(this.state.editedChannel)}
                handleSubmit={this.props.handleSubmit}
                valid={this.props.valid}
                dirty={this.props.dirty}
                submitting={this.props.submitting}
            />
        );
    }
}