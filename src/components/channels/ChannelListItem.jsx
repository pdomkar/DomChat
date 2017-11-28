import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/es/Link';
import { List } from 'immutable';

function ChannelListItem(props)  {
    return (
        <li key={props.channel.id}>
            <Link to={`/channels/${props.channel.id}`}># {props.channel.name}</Link>
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
};

export { ChannelListItem };