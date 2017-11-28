import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
// import { CSSTransition } from 'react-transition-group';

import { ChannelListItem } from './ChannelListItem';
import { ChannelListEditedItemRedux } from '../../containers-redux/channels/ChannelListEditedItem';
import { ChannelListNewItemRedux } from '../../containers-redux/channels/ChannelListNewItem';
import { fetchChannels } from '../../actions/channels/fetchChannels';

export class ChannelList extends React.PureComponent {
    static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        email: PropTypes.string.isRequired,
        createChannelVisible: PropTypes.bool.isRequired,
        onStartCreating: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadChannels();
    }

    render() {

        const itemElements = this.props.list
            .filter(channel => this.props.email === channel.createdBy || channel.users.indexOf(this.props.email) !== -1)
            .map( channel => {
                return (<ChannelListItem key={channel.id} channel={channel} email={this.props.email}/>);
            });

        // let channelEditedModal = null;
        // if(this.props.editedChannelId !== null) {
        //     const editedChannel = this.props.list.find(channel => channel.id === this.props.editedChannelId);
        //     channelEditedModal = (<ChannelListEditedItemRedux channel={editedChannel} submitButtonText="Save"/>);
        // }

        let channelCreatedModal = null;
        if(this.props.createChannelVisible === true) {
            channelCreatedModal = (<ChannelListNewItemRedux />);
        }

        return (
            <div>
                <h3>
                    Channels
                    {!this.props.createChannelVisible &&
                    <a
                        type="button"
                        className="btn"
                        onClick={() => this.props.onStartCreating()}
                    >
                        <i className="fa fa-plus" aria-hidden="true" />
                    </a>
                    }
                </h3>
                <ul>
                    {itemElements}
                </ul>
                {/*<CSSTransition*/}
                {/*in={this.props.editedChannelId !== null}*/}
                {/*timeout={1000}*/}
                {/*classNames="fade"*/}
                {/*>*/}
                {/*</CSSTransition>*/}
                {channelCreatedModal}
            </div>
        );
    }
}