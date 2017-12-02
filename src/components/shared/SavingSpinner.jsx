import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const loaderClass = (loader) => {
    return classNames({
        'savingSpinner': true,
        'loader': loader,
    });
};

const SavingSpinner = (props) => (
    <div className={loaderClass(props.loader)} alt="saving">
        <div className="circle1"/>
        <div className="circle2"/>
    </div>
);

SavingSpinner.propTypes = {
    loader: PropTypes.bool,
};

export { SavingSpinner };