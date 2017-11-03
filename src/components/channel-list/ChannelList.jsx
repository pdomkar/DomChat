import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
// import { CSSTransition } from 'react-transition-group';

import { ChannelListItem } from './ChannelListItem';
import { ChannelListEditedItem } from '../../containers/channel-list/ChannelListEditedItem';
import { ChannelListNewItem } from './ChannelListNewItem';

function ChannelList(props) {

    const itemElements = props.list.map( channel => {
        return (<ChannelListItem key={channel.id} channel={channel} onStartEditing={props.onStartEditing}/>);
    });

    let channelEditedModal = null;
    if(props.editedChannelId !== null) {
        const editedChannel = props.list.find(channel => channel.id === props.editedChannelId);
        channelEditedModal = (<ChannelListEditedItem channel={editedChannel} submitButtonText="Save" onCancel={props.onCancelEditing} onSubmit={props.onSave}/>);
    }

    let channelCreatedModal = null;
    if(props.createChannelVisible === true) {
        channelCreatedModal = (<ChannelListNewItem onCreate={props.onCreate} onCancel={props.onCancelCreating}/>);
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
    onCreate: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onStartCreating: PropTypes.func.isRequired,
    onCancelCreating: PropTypes.func.isRequired,
    onStartEditing: PropTypes.func.isRequired,
    onCancelEditing: PropTypes.func.isRequired
};

export { ChannelList };