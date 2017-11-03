import React from 'react';
import { uuid } from '../utils/uuidGenerator';
import Immutable from 'immutable';
// import { CSSTransition } from 'react-transition-group';

import { ChannelListItem } from './ChannelListItem';
import { ChannelListEditedItem } from './ChannelListEditedItem';

export class ChannelList extends React.Component {
    constructor() {
        super();

        this.state = {
            list: this._loadInitCahnnels(),
            editedChannelId: null
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if(this.state.list !== nextState.list) {
            localStorage.setItem('channels', JSON.stringify(nextState.list.toJS()));
        }
    }

    _addChannel = () => {
        this.setState((prevState) => ({
            list: prevState.list.push({
                id: uuid(),
                name: 'New Channel'
            })
        }));
    };

    _updateChannel = (channel) => {
        this.setState((prevState) => {
            let newState = {
                editedChannelId: null
            };

            const channelIndex = prevState.list.findIndex(o => o.id === channel.id);
            if(channelIndex >= 0) {
                newState.list = prevState.list.update(channelIndex, prevChannel => ({ ...prevChannel, ...channel }));
            }
            return newState;
        });
    };

    _startEditing = (channelId) => {
        this.setState({
            editedChannelId: channelId
        });
    };

    _cancelEditing = () => {
        this.setState({
            editedChannelId: null
        });
    };

    _getDefaultChannels = () => {
        return Immutable.List([
            {
                id: uuid(),
                name: 'React',
            },
            {
                id: uuid(),
                name: 'Angular',
            },
        ]);
    };

    _loadInitCahnnels = () => {
        const storedChannelsJSON = localStorage.getItem('channels');
        return storedChannelsJSON ? Immutable.List(JSON.parse(storedChannelsJSON)) : this._getDefaultChannels();
    };

    render() {
        const { list } = this.state;

        const itemElements = list.map( item => {
            return (<ChannelListItem key={item.id} item={item} onStartEditing={this._startEditing}/>);
        });

        let channelEditedModal = null;
        if(this.state.editedChannelId !== null) {
            const editedChannel = this.state.list.find(channel => channel.id === this.state.editedChannelId);
            channelEditedModal = (<ChannelListEditedItem item={editedChannel} onCancelEditing={this._cancelEditing} onSave={this._updateChannel}/>);
        }

        return(
            <div>
                <h3>
                    Channels
                    <a
                        type="button"
                        className="btn"
                        onClick={this._addChannel}
                    >
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </a>
                </h3>
                <ul>
                    {itemElements}
                </ul>
                {/*<CSSTransition*/}
                    {/*in={this.state.editedChannelId !== null}*/}
                    {/*timeout={1000}*/}
                    {/*classNames="fade"*/}
                {/*>*/}
                    {channelEditedModal}
                {/*</CSSTransition>*/}
            </div>
        );
    }
}