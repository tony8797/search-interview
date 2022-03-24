import React from 'react';
import PropTypes from 'prop-types';
import ClockLoader from 'react-spinners/ClockLoader';

function Spinner({
  loading,
  size,
}) {
  return (
    <ClockLoader
      size={size}
      loading={loading}
      speedMultiplier={1.5}
    />
  );
}

Spinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
};

Spinner.defaultProps = {
  loading: true,
  size: 50,
};

export default Spinner;
