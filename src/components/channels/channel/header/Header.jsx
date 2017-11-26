import * as React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <div className="header">
        <h3>{props.channel.name}</h3>
        <p>{props.channel.description}</p>
        <span><i className="fa fa-users" aria-hidden="true"/>{props.channel.users.length+1}</span>
        <a><i className="fa fa-edit" aria-hidden="true"/></a>
        <a onClick={() => props.onDelete(props.channel.id)}><i className="fa fa-trash" aria-hidden="true"/></a>
    </div>
);

Header.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        createdBy: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export { Header };