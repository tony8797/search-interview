import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const defaultSx = { height: '40px' };

function InputWrapper({
  value,
  sx,
  ...rest
}) {
  return (
    <TextField
      margin="dense"
      value={value}
      autoComplete="new-password"
      fullWidth
      sx={{
        ...defaultSx,
        ...sx,
      }}
      {...rest}
    />
  );
}

InputWrapper.propTypes = {
  value: PropTypes.string.isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

InputWrapper.defaultProps = {
  sx: null,
};

export default InputWrapper;
