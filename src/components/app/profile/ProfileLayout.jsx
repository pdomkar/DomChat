import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { Avatar } from '../../../containers-redux/app/profile/Avatar';
import { Details } from '../../../containers-redux/app/profile/Details';
import { CHANNELS } from '../../../constants/routes';
import { HeadInHelmet } from '../../../containers-redux/shared/HeadInHelment';
import { StatusMessages } from '../../../containers-redux/shared/StatusMessages';
import { Loader } from '../../../containers-redux/shared/Loader';

class ProfileLayout extends React.PureComponent {
    static propTypes = {
        fetchDetails: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.fetchDetails();
    }

    render() {
        return (
            <div className="profile-layout">
                <HeadInHelmet />
                <div className="header">
                    Edit your profile
                    <Link to={CHANNELS} className="back"><i className="fa fa-times" aria-hidden="true"/></Link>
                </div>
                <div className="body">
                    <div className="details-wrapper">
                        <Loader stateLoadingSelector={state => state.profile.isFetchingDetails}>
                            <Details />
                        </Loader>
                    </div>
                    <div className="avatar-wrapper">
                        <Loader stateLoadingSelector={state => state.profile.isFetchingAvatar}>
                            <Avatar />
                        </Loader>
                    </div>
                </div>
                <StatusMessages />
            </div>
        );
    }
}

export { ProfileLayout };