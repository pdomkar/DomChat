import React from 'react';
import PropTypes from 'prop-types';
import {INVALID,NOT_CHANGED, SAVEABLE} from '../../constants/formStates';

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

const UpdatePane = ({formState}) => {
    switch(formState) {
        case NOT_CHANGED:
            return <NoChangedDetails/>;
        case INVALID:
            return <InvalidDetails/>;
        case SAVEABLE:
            return <SubmitDetails/>;
        default:
            throw new Error(`Unknown form state ${formState}`);
    }
};

UpdatePane.propTypes = {
    formState: PropTypes.string.isRequired,
};

export { UpdatePane };