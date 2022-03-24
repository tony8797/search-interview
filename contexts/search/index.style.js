import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
  SortTypeSelect,
  SearchResultHeader,
  PaginationContainer,
};
