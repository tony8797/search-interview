import styled from 'styled-components';
import Box from '@mui/material/Box';
import { deviceSize } from '@/themes/styles';

const { mobile } = deviceSize;

const WinnerContainer = styled(Box)`
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mobile} {
    flex-direction: column;
  }
`;

const WinnerList = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    width: 20%;
    margin-bottom: 10px;

    @media ${mobile} {
      width: 33%;
    }
  }
`;

export default {
  WinnerContainer,
  WinnerList,
};
