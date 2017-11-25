import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/es/Link';
import { List } from 'immutable';

function ChannelListItem(props)  {
    return (
        <li key={props.channel.id}>
            <Link to={`/channels/${props.channel.id}`}># {props.channel.name}</Link>
            {props.channel.createdBy === props.email && <a onClick={() => props.onStartEditing(props.channel.id)}><i className="fa fa-pencil" aria-hidden="true"/></a>}
            {props.channel.createdBy === props.email && <a onClick={() => props.onDelete(props.channel.id)}><i className="fa fa-trash" aria-hidden="true"/></a>}
        </li>
    );
}

ChannelListItem.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        createdBy: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    onStartEditing: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export { ChannelListItem };