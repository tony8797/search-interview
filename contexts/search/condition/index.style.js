import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { theme } from '@/themes/styles';

const { neutral } = theme.color;

const SearchConditionContainer = styled(Row)`
  width: 90%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  background-color: ${neutral.white};
  margin: 30px 0 20px 0;
  padding: 20px;
  border-radius: 6px 0px 0px 6px;
  box-shadow: 0px 0px 10px ${neutral.gray4};
`;

const BlockList = styled(Row)`
  width: 100%;
  padding: 0;
  flex: 0;
  margin-bottom: 10px;

  .block-list-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;

    & > .left {
      font-size: 16px;
      color: ${neutral.black};
    }

    .chevron-icon > svg {
      cursor: pointer;
      transform: ${({ isOpen }) => `rotate(${isOpen ? 360 : 180}deg)`};
      transition: transform 150ms ease;
    }
  }

  .block-list-content {
    height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};

    & > .block-list-content-item {
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};;
    }
  }
`;

const Split = styled(Col)`
  width: 100%;
  margin: 10px auto 0;
  border-bottom: 1px solid ${neutral.gray4};
`;

export default {
  SearchConditionContainer,
  BlockList,
  Split,
};
