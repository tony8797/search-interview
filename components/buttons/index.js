import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useDebouncedCallback, useThrottledCallback } from 'use-debounce';

function ButtonWrapper({
  onClick,
  children,
  debounceTime,
  optimizeFunctionType,
  ...rest
}) {
  const optimizeFunction = (optimizeFunctionType === 'debounce' && useDebouncedCallback)
    || (optimizeFunctionType === 'throttle' && useThrottledCallback)
    || '';

  const buttonAction = (
    optimizeFunction && (
      optimizeFunction(
        () => onClick(),
        debounceTime,
        { maxWait: 2000 },
      )
    )
  ) || onClick;

  return (
    <Button
      {...rest}
      onClick={() => buttonAction()}
    >
      {children}
    </Button>
  );
}

ButtonWrapper.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  debounceTime: PropTypes.number,
  optimizeFunctionType: PropTypes.oneOf(['debounce', 'throttle', '']),
};

ButtonWrapper.defaultProps = {
  onClick: () => {},
  debounceTime: 300,
  optimizeFunctionType: 'debounce',
};

export default ButtonWrapper;
