import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
// import { CSSTransition } from 'react-transition-group';

import { ChannelListItem } from './ChannelListItem';
import { ChannelListEditedItemRedux } from '../../../containers-redux/channels/channel-list/ChannelListEditedItem';
import { ChannelListNewItemRedux } from '../../../containers-redux/channels/channel-list/ChannelListNewItem';
import { fetchChannels } from '../../../actions/channels/channel-list/fetchChannels';

export class ChannelList extends React.PureComponent {
    static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        createChannelVisible: PropTypes.bool.isRequired,
        editedChannelId: PropTypes.string,
        onStartCreating: PropTypes.func.isRequired,
        onShowChannel: PropTypes.func.isRequired,
        onStartEditing: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadChannels();
    }

    render() {

        const itemElements = this.props.list.map( channel => {
            return (<ChannelListItem key={channel.id} channel={channel} onShowChannel={this.props.onShowChannel} onStartEditing={this.props.onStartEditing} onDelete={this.props.onDelete}/>);
        });

        let channelEditedModal = null;
        if(this.props.editedChannelId !== null) {
            const editedChannel = this.props.list.find(channel => channel.id === this.props.editedChannelId);
            channelEditedModal = (<ChannelListEditedItemRedux channel={editedChannel} submitButtonText="Save"/>);
        }

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
                {channelEditedModal}
                {/*</CSSTransition>*/}
                {channelCreatedModal}
            </div>
        );
    }
}