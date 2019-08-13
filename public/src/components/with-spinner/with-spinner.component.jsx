import React from 'react';
import './with-spinner.styles.scss';

// eslint-disable-next-line react/display-name
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) =>
    isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container" />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );

  return Spinner;
};

export default WithSpinner;
