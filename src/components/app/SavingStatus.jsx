import PropTypes from 'prop-types';
import React from 'react';
import { SavingSpinner } from '../shared/SavingSpinner.jsx';

export class SavingStatus extends React.PureComponent {

    static propTypes = {
        watchedEntity: PropTypes.object.isRequired,
        isSaving: PropTypes.bool.isRequired,
    };


    render() {
        return (
            <span>
                { this.props.isSaving && <SavingSpinner /> }
            </span>
        );
    }
}