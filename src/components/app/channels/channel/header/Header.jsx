import React from 'react';
import PropTypes from 'prop-types';

import { ChannelListEditedItemRedux } from '../../../../../containers-redux/app/channels/channel/header/ChannelListEditedItem';

const Header = (props) => (
    <div className="header">
        <section>
            <header>
                <h3>{props.channel.name}</h3>
                <div className="controls">
                    <span><i className="fa fa-users" aria-hidden="true"/>{props.channel.users.length+1}</span>
                    {props.channel.createdBy === props.email && <a onClick={() => props.onStartEditing(props.channel.id)} title="Edit channel"><i className="fa fa-pencil" aria-hidden="true"/></a>}
                    {props.channel.createdBy === props.email && <a onClick={() => props.onDelete(props.channel.id)} title="Delete channel"><i className="fa fa-trash" aria-hidden="true"/></a>}
                </div>
            </header>
            <p>{props.channel.description}</p>
        </section>
        {props.editedChannelId !== null && <ChannelListEditedItemRedux channel={props.channel} submitButtonText="Save"/>}
    </div>
);

Header.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        createdBy: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
    }).isRequired,
    editedChannelId: PropTypes.string,
    email: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onStartEditing: PropTypes.func.isRequired,
};

export { Header };