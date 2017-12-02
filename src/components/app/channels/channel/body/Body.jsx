import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { List } from 'immutable';
import { Message } from './Message';


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
        onRemove: PropTypes.func.isRequired,
        onVote: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        valid: PropTypes.bool.isRequired,
        dirty: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        console.log('con', props.channel);
    }

    componentWillMount() {
        console.log('willMount');
        this.props.loadMessages(this.props.channel.id);
    }

    render() {
        const itemElements = this.props.messages
            .map( message => {
                return (
                    <Message key={message.id} message={message} channelId={this.props.channel.id} email={this.props.email} onRemove={this.props.onRemove} onVote={this.props.onVote}/>
                );
            });
        return (
            <div className="body">
                <div className="messages">
                    {itemElements}
                </div>
                <div className="footer">
                    <form onSubmit={this.props.handleSubmit}>
                        <div>
                            <Field
                                type="message"
                                name="message"
                                component="input"
                            />
                            <button
                                type="submit"
                                className="btn"
                                // disabled={!this.props.dirty && !this.props.valid}
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
