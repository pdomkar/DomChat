import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { Avatar } from '../../containers-redux/profile/Avatar';
import { Details } from '../../containers-redux/profile/Details';
import { CHANNELS } from '../../constants/routes';
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelment';
import { Errors } from '../../containers-redux/shared/Errors';
import { Loader } from '../../containers-redux/shared/Loader';

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
                <Avatar />
                <Link to={CHANNELS}>Zpět</Link>
                <Loader stateLoadingSelector={state => state.profile.isFetchingDetails}>
                    <Details />
                </Loader>
                <Errors />
            </div>
        );
    }
}

export { ProfileLayout };