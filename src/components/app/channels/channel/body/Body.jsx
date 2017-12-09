import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { List } from 'immutable';

import { Message } from './Message';
import { MessageInput } from './MessageInput';
import { validateNonEmptyness } from '../../../../../utils/validation';
import { Loader } from '../../../../../containers-redux/shared/Loader';


export class Body extends React.PureComponent {
    static propTypes = {
        channel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            createdBy: PropTypes.string.isRequired,
        }).isRequired,
        messages: PropTypes.instanceOf(List).isRequired,
        email: PropTypes.string.isRequired,
        loadMessages: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        onVote: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        valid: PropTypes.bool.isRequired,
        dirty: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadMessages(this.props.channel.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.messages.size !== this.props.messages.size) {
            this.messagesBlock.scrollTop = this.messagesBlock.scrollHeight;
        }
    }

    validateMessage = validateNonEmptyness('Message');

    render() {
        const itemElements = this.props.messages
            .map( message => {
                return (
                    <Message
                        key={message.id}
                        message={message}
                        channelId={this.props.channel.id}
                        email={this.props.email}
                        onDelete={this.props.onDelete}
                        onVote={this.props.onVote}
                    />
                );
            });
        return (
            <div className="body">
                <div className="messages" ref={(messagesBlock) => { this.messagesBlock = messagesBlock; }} >
                    <Loader stateLoadingSelector={state => state.channelApp.channel.isFetchingMessages || state.channelApp.channel.isDeletingMessage}>
                        {itemElements}
                    </Loader>
                </div>

                <div className="footer">
                    <form onSubmit={this.props.handleSubmit}>
                        <Field
                            type="textarea"
                            placeholder="Your message text"
                            name="message"
                            id="message"
                            component={MessageInput}
                            rows="1"
                            required
                            validate={this.validateMessage}
                        />
                        <button
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
