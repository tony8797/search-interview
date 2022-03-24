import styled from 'styled-components';
import Box from '@mui/material/Box';
import { theme } from '@/themes/styles';

const { neutral, primary } = theme.color;

const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  color: ${neutral.white};
  background-color: ${primary.default};
`;

export default {
  HeaderContainer,
};
