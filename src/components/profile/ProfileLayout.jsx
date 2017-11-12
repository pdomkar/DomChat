import * as React from 'react';

import {Link} from 'react-router-dom';

import { Avatar } from './Avatar';
import { Details } from '../../containers-redux/profile/Details';
import { CHANNELS } from '../../constants/routes';
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelment.jsx';
import { Errors } from '../../containers-redux/shared/Errors';

const ProfileLayout = () => (
    <div className="profile-layout">
        <HeadInHelmet />
        <Avatar/>
        <Link to={CHANNELS}>Zpět</Link>
        <Details/>
        <Errors />
    </div>
);
export { ProfileLayout };