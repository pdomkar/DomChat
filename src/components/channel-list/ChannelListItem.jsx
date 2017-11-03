import React from 'react';
import PropTypes from 'prop-types';

function ChannelListItem(props)  {
    return (
        <li key={props.channel.id}>
            {props.channel.name} <a onClick={() => props.onStartEditing(props.channel.id)}><i className="fa fa-pencil" aria-hidden="true"/></a>
        </li>
    );
}

ChannelListItem.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onStartEditing: PropTypes.func.isRequired
};

export { ChannelListItem };