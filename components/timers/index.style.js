import styled from 'styled-components';
import Box from '@mui/material/Box';
import { theme } from '@/themes/styles';

const { neutral } = theme.color;

const TimerCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
`;

const DigitalContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const DigitalItem = styled(Box)`
  position: relative;
  display: flex;
  flex: 0 1 25%;
  font-size: 30px;
  background-color: ${neutral.gray1};
  border-radius: 5px;
  padding: 10px 12px;
  color: white;

  &:first-child {
    margin-right: 2px;
  }

  &:after {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 50%;
    bottom: 50%;
    content: "";
    width: '100%';
    height: 2px;
    background-color: ${neutral.gray3};
    opacity: 0.4;
  }
`;

const Title = styled(Box)`
  width: 100%;
  text-align: right;
  font-size: 14px;
  padding-right: ${({ isShowDot = false }) => (isShowDot ? '28px' : 0)};
`;

const Dot = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  & > span {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: ${neutral.black};
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export default {
  TimerCardContainer,
  DigitalContainer,
  DigitalItem,
  Title,
  Dot,
};
