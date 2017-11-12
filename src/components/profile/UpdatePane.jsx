import React from 'react';
import PropTypes from 'prop-types';
import {
    INVALID,
    NOT_CHANGED,
    SAVEABLE,
    SAVING_NOW
} from '../../constants/formStates';
import { SavingSpinner } from '../shared/SavingSpinner';

const NoChangedDetails = () => (
    <div
        className="alert alert-info"
        role="alert">
        Not actual profile. Change it...
    </div>
);

const InvalidDetails = () => (
    <div
        className="alert alert-warn"
        role="alert">
        Fix red fields
    </div>
);

const SubmitDetails = () => (
    <button
        type="submit"
        className="btn"
    >
        Save
    </button>
);
const UploadingDetails = () => (
    <div
        className="well-sm alert-warning text-center"
        role="alert"
    >
        <SavingSpinner />
        &nbsp;
        Saving…
    </div>
);

const UpdatePane = ({formState}) => {
    switch(formState) {
        case NOT_CHANGED:
            return <NoChangedDetails/>;
        case INVALID:
            return <InvalidDetails/>;
        case SAVEABLE:
            return <SubmitDetails/>;
        case SAVING_NOW:
            return <UploadingDetails />;
        default:
            throw new Error(`Unknown form state ${formState}`);
    }
};

UpdatePane.propTypes = {
    formState: PropTypes.string.isRequired,
};

export { UpdatePane };