import React from 'react';
import PropTypes from 'prop-types';
import { ChannelListEditedItem as ChannelListEditedItemComonent } from '../../../../components/app/channels/channel/header/ChannelListEditedItem';
import { List } from 'immutable';

export class ChannelListEditedItem extends React.Component {
    static propTypes = {
        typeCompopnent: PropTypes.string.isRequired,
        channel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
        }).isRequired,
        submitButtonText: PropTypes.string.isRequired,
        users:  PropTypes.instanceOf(List).isRequired,
        email: PropTypes.string.isRequired,
        onFetchUsers: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
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
                typeCompopnent={this.props.typeCompopnent}
                editedChannel={this.state.editedChannel}
                submitDisabled={this.state.editedChannel === this.props.channel}
                submitButtonText={this.props.submitButtonText}
                users={this.props.users}
                email={this.props.email}
                onFetchUsers={this.props.onFetchUsers}
                onCancel={this.props.onCancel}
                onSubmit={() => {console.log("qqqq"); return this.props.onSubmit(this.state.editedChannel)}}
                handleSubmit={this.props.handleSubmit}
                valid={this.props.valid}
                dirty={this.props.dirty}
                submitting={this.props.submitting}
            />
        );
    }
}