import PropTypes from 'prop-types';
import React from 'react';
import { SavingSpinner } from '../shared/SavingSpinner.jsx';

export class SavingStatus extends React.PureComponent {

    static propTypes = {
        watchedEntity: PropTypes.object.isRequired,
        isSaving: PropTypes.bool.isRequired,
        save: PropTypes.func.isRequired,
    };

    componentWillUpdate(nextProps) {
        if (this.props.watchedEntity !== nextProps.watchedEntity) {
            this.props.save();
        }
    }

    render() {
        return (
            <span>
                {
                    this.props.isSaving && <SavingSpinner />
                }
            </span>
        );
    }
}