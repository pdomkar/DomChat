import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import List from 'immutable';

import { HeadInHelmet } from '../../../containers-redux/shared/HeadInHelment.jsx';
import { ChannelListRedux } from '../../../containers-redux/app/channels/ChannelList';
import { StatusMessages } from '../../../containers-redux/shared/StatusMessages';
import { ChannelLayout } from '../../../containers-redux/app/channels/channel/ChannelLayout';
import { PROFILE_EDIT } from '../../../constants/routes';
import { ChannelListNewItemRedux } from '../../../containers-redux/app/channels/ChannelListNewItem';
import { Loader } from '../../../containers-redux/shared/Loader';


export class ChannelsLayout extends React.PureComponent {
    static propTypes = {
        details: PropTypes.shape({
            email: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        channelId: PropTypes.string,
        channels: PropTypes.instanceOf(List),
        fetchDetails: PropTypes.func.isRequired,
        onLogOut: PropTypes.func.isRequired,
        createChannelVisible: PropTypes.bool.isRequired,
        onStartCreating: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.fetchDetails();
    }

    render() {
        const selectChannel = this.props.channels.find(channel => channel.id === this.props.channelId);

        let channelCreatedModal = null;
        if(this.props.createChannelVisible === true) {
            channelCreatedModal = (<ChannelListNewItemRedux />);
        }

        return (
            <div className="channels-layout">
                <HeadInHelmet />
                <div className="sidebar-container">
                    <div className="header">
                        <h1>DomChat</h1>
                        <div className="user">
                            <span>{this.props.details.name}</span>
                            <a onClick={this.props.onLogOut} title="Log out">
                                <i className="fa fa-sign-out" aria-hidden="true"/>
                            </a>
                            <Link to={PROFILE_EDIT} title="Edit profile">
                                <i className="fa fa-user" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="body">
                        <div className="top">
                        <h3>
                            Channels
                        </h3>
                        {!this.props.createChannelVisible &&
                        <a onClick={() => this.props.onStartCreating()} title="Create channel">
                            <i className="fa fa-plus" aria-hidden="true" />
                        </a>
                        }
                        </div>
                        <ChannelListRedux channels={this.props.channels} selectedChannel={selectChannel} />
                    </div>
                </div>
                <Loader stateLoadingSelector={state => state.channelApp.isDeletingChannel || state.channelApp.isUpdatingChannel}
                        contentStyle={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: '100%',
                        }}>
                    {
                        selectChannel
                        && <ChannelLayout channel={selectChannel} />
                        || <div className="not-select-channel">
                            <h3>Select channel in left menu or create new channel</h3>
                           </div>
                    }
                </Loader>
                {channelCreatedModal}
                <StatusMessages />
            </div>
        );
    }
}