import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { CHANNELS } from '../../../constants/routes';
import { HeadInHelmet } from '../../../containers-redux/shared/HeadInHelment';
import { StatusMessages } from '../../../containers-redux/shared/StatusMessages';
import { Loader } from '../../../containers-redux/shared/Loader';

class ProfileViewLayout extends React.PureComponent {
    static propTypes = {
        profileView: PropTypes.shape({
            email: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            fullname: PropTypes.string,
            whatIDo: PropTypes.string,
            avatarUri: PropTypes.string,
        }),
        fetchProfileView: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchProfileView();
    }

    render() {
        return (
            <div className="profile-view-layout">
                <HeadInHelmet />
                <div className="header">
                    Profile view for {this.props.profileView.name}
                    <Link to={CHANNELS} className="back"><i className="fa fa-times" aria-hidden="true"/></Link>
                </div>
                <div className="body">
                    <Loader stateLoadingSelector={state => state.profile.isFetchingProfileView}
                            contentStyle={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                    >
                        <div className="details-wrapper">
                            <div className="row">
                                <label>Email</label>
                                <div className="value">
                                    {this.props.profileView.email}
                                </div>
                            </div>
                            <div className="row">
                                <label>Name</label>
                                <div className="value">
                                    {this.props.profileView.name}
                                </div>
                            </div>
                            <div className="row">
                                <label>Full name</label>
                                <div className="value">
                                    {this.props.profileView.fullname}
                                </div>
                            </div>
                            <div className="row">
                                <label>What I do?</label>
                                <div className="value">
                                    {this.props.profileView.whatIDo}
                                </div>
                            </div>
                        </div>
                        <div className="avatar-wrapper">
                            {this.props.profileView.avatarUri ? <img src={this.props.profileView.avatarUri} alt="Profile picture"/> : <img src="assets/no-profile.png" alt="no image"/>}
                        </div>
                    </Loader>
                </div>
                <StatusMessages />
            </div>
        );
    }
}

export { ProfileViewLayout };