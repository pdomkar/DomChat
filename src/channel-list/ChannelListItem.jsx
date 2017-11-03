import React from 'react';
import PropTypes from 'prop-types';

function ChannelListItem(props)  {

    return (
        <li key={props.item.id}>
            {props.item.name} <a onClick={() => props.onStartEditing(props.item.id)}><i className="fa fa-pencil" aria-hidden="true"/></a>
        </li>
    );
}

ChannelListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onStartEditing: PropTypes.func.isRequired
};

export {ChannelListItem};