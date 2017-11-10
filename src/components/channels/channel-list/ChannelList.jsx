import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
// import { CSSTransition } from 'react-transition-group';

import { ChannelListItem } from './ChannelListItem';
import { ChannelListEditedItemRedux } from '../../../containers-redux/channels/channel-list/ChannelListEditedItem';
import { ChannelListNewItemRedux } from '../../../containers-redux/channels/channel-list/ChannelListNewItem';

function ChannelList(props) {

    const itemElements = props.list.map( channel => {
        return (<ChannelListItem key={channel.id} channel={channel} onStartEditing={props.onStartEditing} onDelete={props.onDelete}/>);
    });

    let channelEditedModal = null;
    if(props.editedChannelId !== null) {
        const editedChannel = props.list.find(channel => channel.id === props.editedChannelId);
        channelEditedModal = (<ChannelListEditedItemRedux channel={editedChannel} submitButtonText="Save"/>);
    }

    let channelCreatedModal = null;
    if(props.createChannelVisible === true) {
        channelCreatedModal = (<ChannelListNewItemRedux />);
    }

    return(
        <div>
            <h3>
                Channels
                {!props.createChannelVisible &&
                    <a
                        type="button"
                        className="btn"
                        onClick={() => props.onStartCreating()}
                    >
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </a>
                }
            </h3>
            <ul>
                {itemElements}
            </ul>
            {/*<CSSTransition*/}
                {/*in={props.editedChannelId !== null}*/}
                {/*timeout={1000}*/}
                {/*classNames="fade"*/}
            {/*>*/}
                {channelEditedModal}
            {/*</CSSTransition>*/}
            {channelCreatedModal}
        </div>
    );
}

ChannelList.propTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    createChannelVisible: PropTypes.bool.isRequired,
    editedChannelId: PropTypes.string,
    onStartCreating: PropTypes.func.isRequired,
    onStartEditing: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export { ChannelList };