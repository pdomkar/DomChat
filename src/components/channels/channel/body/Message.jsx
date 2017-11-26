import * as React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => (
    <div className="message" key={props.message.id}>
        <div className="author"><img src={props.message.avatarUri||''} width="30"/>{props.message.createdBy} {props.message.createdAt}{props.message.createdBy === props.email && <button onClick={() => props.onRemove(props.channelId, props.message.id)}><i className="fa fa-trash" aria-hidden="true"/></button>}</div>
        <div className="text">{props.message.value}</div>
        <div className="vote">
            <button onClick={() => props.onVote({...props.message, vote: props.message.vote+1})}><i className="fa fa-plus" aria-hidden="true"/></button>
            <button onClick={() => props.onVote({...props.message, vote: props.message.vote-1})}><i className="fa fa-minus" aria-hidden="true"/></button>
            <span>{props.message.vote}</span>
        </div>
    </div>
);

Message.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        avatarUri: PropTypes.string.isRequired,
        createdBy: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        vote: PropTypes.number.isRequired,
    }).isRequired,
    channelId: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    onVote: PropTypes.func.isRequired,
};

export { Message };