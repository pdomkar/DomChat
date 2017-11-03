import React from 'react';
import PropTypes from 'prop-types';
import { ChannelListEditedItem as ChannelListEditedItemComonent } from '../../components/channel-list/ChannelListEditedItem';

export class ChannelListEditedItem extends React.Component {
    static propTypes = {
        channel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        submitButtonText: PropTypes.string.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            editedChannel: props.channel
        };
    }

    _onNameChange = (event) => {
        const value = event.target.value;

        this.setState(prevState => ({
            editedChannel: {
                ...prevState.editedChannel,
                name: value
            }
        }));
    };

    render() {
        return (
            <ChannelListEditedItemComonent
                editedChannel={this.state.editedChannel}
                submitDisabled={this.state.editedChannel === this.props.channel}
                submitButtonText={this.props.submitButtonText}
                onNameChange={this._onNameChange}
                onCancel={this.props.onCancel}
                onSubmit={() => this.props.onSubmit(this.state.editedChannel)}
            />
        );
    }
}