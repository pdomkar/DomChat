import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/es/Link';
import classNames from 'classnames';


function ChannelListItem(props)  {
    const selectedChannel = classNames({
        'selected': props.selectedChannel && props.selectedChannel.id === props.channel.id,
    });

    return (
        <li key={props.channel.id} className={selectedChannel}>
            <Link to={`/channels/${props.channel.id}`}>{props.channel.name}</Link>
        </li>
    );
}

ChannelListItem.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        createdBy: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
    }).isRequired,
    selectedChannel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        createdBy: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
    })
};

export { ChannelListItem };