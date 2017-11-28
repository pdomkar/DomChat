import * as React from 'react';
import PropTypes from 'prop-types';
import { ChannelListEditedItemRedux } from '../../../../containers-redux/channels/ChannelListEditedItem';

const Header = (props) => (
    <div className="header">
        <h3>{props.channel.name}</h3>
        <p>{props.channel.description}</p>
        <span><i className="fa fa-users" aria-hidden="true"/>{props.channel.users.length+1}</span>
        {props.channel.createdBy === props.email && <a onClick={() => props.onStartEditing(props.channel.id)}><i className="fa fa-pencil" aria-hidden="true"/></a>}
        {props.channel.createdBy === props.email && <a onClick={() => props.onDelete(props.channel.id)}><i className="fa fa-trash" aria-hidden="true"/></a>}
        {props.editedChannelId !== null && <ChannelListEditedItemRedux channel={props.channel} submitButtonText="Save"/>}
    </div>
);

Header.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        createdBy: PropTypes.string.isRequired,
    }).isRequired,
    editedChannelId: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onStartEditing: PropTypes.func.isRequired,
};

export { Header };