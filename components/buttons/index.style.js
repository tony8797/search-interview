import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled, css } from '@mui/system';
import { theme } from '@/themes/styles';

const { primary, neutral } = theme.color;

const ButtonStyleSetting = styled('button')`
  background-color: ${neutral.white};
  padding: 15px 20px;
  border-radius: 10px;
  color: ${primary.default};
  font-weight: 600;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: 1px solid ${primary.default};

  ${css`
    &:hover {
      background-color: ${primary.default};
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${primary.default};
    }

    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
      box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  `}
`;

export default {
  ButtonStyleSetting,
};
