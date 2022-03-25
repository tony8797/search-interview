import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import { Select } from 'antd';
import { theme } from '@/themes/styles';

const { neutral, primary } = theme.color;

const SearchContainer = styled(Container)`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  .search-container {
    min-height: 100vh;
    display: flex;
  }

  .search-block {
    height: 100%;
    padding: 0px;
  }
`;

const CourseList = styled(Row)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const CourseListItem = styled(Col)`
  width: 100%;
  min-height: 150px;
  display: flex;
  margin-bottom: 10px;
  padding: 0;
  border-radius: 6px;
  box-shadow: 0px 0px 10px ${neutral.gray4};
`;

const CourseListItemImage = styled(Box)`
  width: 300px;
  aspect-ratio: 16 / 9;
  display: flex;
  border: 1px solid ${neutral.gray3};
  background-color: ${neutral.gray4};
  border: 0px;
  border-radius: 6px 0px 0px 6px;
  position: relative;

  & > span {
    border-radius: 6px 0px 0px 6px;
  }
`;

const CollectIcon = styled(Box)`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a39c9b66;
  cursor: pointer;

  & > svg {
    color: white;
  }
`;

const CourseListItemContent = styled(Box)`
  width: calc(100% - 310px);
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const CourseListItemContentHeader = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;

  .content-header-title {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
  }

  .content-header-price {
    color: ${primary.default};
    min-width: 100px;
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
  }
`;

const CourseListItemContentBody = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${neutral.gray3};

  & > .split-dot {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: ${neutral.gray3};
    margin: 0 4px;
  }
`;

const SortTypeSelect = styled(Select)`
  width: 150px;
`;

const SearchResultHeader = styled(Row)`
  width: 100%;
  padding: 10px;
  margin: 30px 0 20px 0;
  border-radius: 6px;
  background-color: ${neutral.white};
  box-shadow: 0px 0px 10px ${neutral.gray4};

  .search-result-header-count {
    display: flex;
    align-items: center;

    .search-result-header-count-number {
      color: ${primary.default};
      margin-right: 4px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
  }

  .search-result-header-sortType {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const PaginationContainer = styled(Row)`
  width: 1000px;
  margin: 0 auto;

  & > div {
    padding-left: 0;
  }
`;

export default {
  SearchContainer,
  CourseList,
  CourseListItem,
  CourseListItemImage,
  CollectIcon,
  CourseListItemContent,
  CourseListItemContentHeader,
  SortTypeSelect,
  SearchResultHeader,
  PaginationContainer,
  CourseListItemContentBody,
};
