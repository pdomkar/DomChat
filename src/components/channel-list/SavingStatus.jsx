import PropTypes from 'prop-types';
import React from 'react';

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
            <span className="pull-right">
                {
                    this.props.isSaving && <div className="savingSpinner" alt="saving">
                                                <div className="circle1"/>
                                                <div className="circle2"/>
                                            </div>
                }
            </span>
        );
    }
}