import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative, injectIntl } from 'react-intl';

import { Loader } from '../../../../../containers-redux/shared/Loader';
import { Link } from 'react-router-dom';
import { PROFILE_DETAIL } from '../../../../../constants/routes';

const FormatedCreatedBy = injectIntl(({date, intl}) => (
    <span className="time" title={`${intl.formatDate(date)} ${intl.formatTime(date)}`}>
        <FormattedRelative value={date}/>
    </span>
));

const Message = (props) => (
    <div>
        <div className="message">
            <Loader stateLoadingSelector={state => state.channelApp.channel.updatingMessage === props.message.id}
                    contentStyle={{
                        display: 'inline-flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                <div className="avatar">
                    <img src={props.message.avatarUri || 'assets/no-profile.png'}/>
                </div>
                <div className="mess-box">
                    <div className="title">
                        <Link to={`/profile/${props.message.createdBy}`}>{props.message.name}</Link>
                        <FormatedCreatedBy date={props.message.createdAt}/>
                    </div>
                    <div className="text">{props.message.value}</div>
                </div>
                <div className="vote">
                    <div>
                        {
                            props.message.createdBy === props.email
                            && <a onClick={() => props.onDelete(props.channelId, props.message.id)} title="Delete message">
                                <i className="fa fa-trash" aria-hidden="true"/>
                            </a>
                        }
                    </div>
                    <div className="state">{props.message.vote}</div>
                    <div className="action">
                        <a onClick={() => props.onVote({...props.message, vote: props.message.vote-1})} title="Vote down"><i className="fa fa-minus" aria-hidden="true"/></a>
                        <a onClick={() => props.onVote({...props.message, vote: props.message.vote+1})} title="Vote up"><i className="fa fa-plus" aria-hidden="true"/></a>
                    </div>
                </div>
            </Loader>
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
    onDelete: PropTypes.func.isRequired,
    onVote: PropTypes.func.isRequired,
};

export { Message };