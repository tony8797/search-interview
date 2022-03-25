import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pagination, Select } from 'antd';
import CourseCard from '@/components/cards';
import SearchCondition from '@/contexts/search/condition';
import searchData from '@/datas/course';
import searchActions from '@/redux/search/actions';
import searchStyle from '@/contexts/search/index.style';

const { Option } = Select;
const { courseTimeCheckFuncList } = searchData;
const {
  SearchContainer,
  CourseList,
  SortTypeSelect,
  SearchResultHeader,
  PaginationContainer,
} = searchStyle;

const PAGE_SIZE = 10;

function SearchPage() {
  const dispatch = useDispatch();
  const { courseData = [], collectionItems = [] } = useSelector((state) => state.search);

  // filter condition and course data
  const [filterCourseData, setFilterCourseData] = useState(courseData ?? []);
  const [filterCourseType, seFilterCourseType] = useState([]);
  const [filterAcademyType, seFilterAcademyType] = useState([]);
  const [filterTime, seFilterTime] = useState([]);

  // pagination and sort
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState(null);
  const [pageData, setPageData] = useState(
    filterCourseData?.length
      ? filterCourseData.slice(0, PAGE_SIZE)
      : [],
  );

  const onChangePageData = useCallback((pageValue) => {
    const pageStart = (pageValue - 1) * PAGE_SIZE;
    setPageData(filterCourseData.slice(pageStart, pageStart + PAGE_SIZE));
  }, [filterCourseData]);

  const onChangeFilterData = (newSortType) => {
    setSortType(newSortType);
    const newFilterCourseData = filterCourseData.sort((a, b) => {
      if (newSortType === 'desc') return b.price - a.price;
      return a.price - b.price;
    });

    setPage(1);
    onChangePageData(1);
    setFilterCourseData(newFilterCourseData);
  };

  const onChangePage = useCallback((newPage) => {
    setPage(newPage);
    onChangePageData(newPage);
  }, [onChangePageData]);

  const onChangeCourseType = (value = '') => {
    if (!value) return;
    let newFilterCourseType = [];

    if (filterCourseType.includes(value)) {
      newFilterCourseType = filterCourseType.filter((ele) => ele !== value);
    } else {
      newFilterCourseType = [...filterCourseType, value];
    }

    seFilterCourseType(newFilterCourseType);
  };

  const onChangeAcademyType = (value = '') => {
    if (!value) return;
    let newFilterAcademyType = [];

    if (filterAcademyType.includes(value)) {
      newFilterAcademyType = filterAcademyType.filter((ele) => ele !== value);
    } else {
      newFilterAcademyType = [...filterAcademyType, value];
    }

    seFilterAcademyType(newFilterAcademyType);
  };

  const onChangeTime = (value = '') => {
    if (!value) return;
    let newFilterTime = [];

    if (filterTime.includes(value)) {
      newFilterTime = filterTime.filter((ele) => ele !== value);
    } else {
      newFilterTime = [...filterTime, value];
    }

    seFilterTime(newFilterTime);
  };

  useEffect(() => {
    if (!filterCourseType.length && !filterAcademyType.length && !filterTime.length) {
      return;
    }

    const newCourseData = courseData.filter((ele) => {
      let isPass = true;
      if (
        (filterCourseType.length && !filterCourseType.includes(ele.courseType))
        || (filterAcademyType.length && !filterAcademyType.includes(ele.firstCategoryUid))
      ) {
        isPass = false;
      }
      if (filterTime.length && isPass) {
        let isPassTime = false;
        for (let i = 0; i < filterTime.length; i++) {
          if (courseTimeCheckFuncList[filterTime[i]](ele.courseHours)) {
            isPassTime = true;
            break;
          }
        }
        isPass = ele.isEnsure === 0 ? false : isPassTime;
      }

      return isPass;
    });
    setFilterCourseData(newCourseData);
  }, [courseData, filterCourseType, filterAcademyType, filterTime]);

  useEffect(() => {
    onChangePage(1);
  }, [filterCourseData, onChangePage]);

  const onChangeCollection = useCallback((courseName = '') => {
    if (!courseName) return;

    const courseItemIndex = collectionItems.findIndex((ele) => ele === courseName);

    let action = searchActions.deleteCollectionItems;
    const collectionItemsSet = new Set(collectionItems);

    if (courseItemIndex === -1) {
      action = searchActions.addCollectionItems;
      collectionItemsSet.add(courseName);
    } else {
      collectionItemsSet.delete(courseName);
    }
    dispatch(action({ collectionItems: [...collectionItemsSet] }));
  }, [dispatch, collectionItems]);

  return (
    <SearchContainer>
      <Row className="search-container">
        <Col xs={4} className="search-block">
          <SearchCondition
            filterCourseType={filterCourseType}
            filterAcademyType={filterAcademyType}
            filterTime={filterTime}
            seFilterCourseType={onChangeCourseType}
            seFilterAcademyType={onChangeAcademyType}
            setFilterTime={onChangeTime}
          />
        </Col>
        <Col xs={8} className="search-block">
          <SearchResultHeader>
            <Col sx={8} className="search-result-header-count">
              <span className="search-result-header-count-number">
                {filterCourseData.length}
              </span>
              門課程
            </Col>
            <Col sx={4} className="search-result-header-sortType">
              <SortTypeSelect
                placeholder="排序"
                value={sortType}
                onChange={(newSortType) => onChangeFilterData(newSortType)}
              >
                <Option key="sortTypeDesc" value="desc">價錢：由高至低</Option>
                <Option key="sortTypeAsc" value="asc">價錢：由低至高</Option>
              </SortTypeSelect>
            </Col>
          </SearchResultHeader>
          <CourseList>
            {
              pageData.length
                ? pageData.map((ele) => (
                  <CourseCard
                    {...ele}
                    key={ele.courseName}
                    collectionItems={collectionItems}
                    onChangeCollection={onChangeCollection}
                  />
                ))
                : null
            }
          </CourseList>
          <PaginationContainer>
            <Col xs={12}>
              <Pagination
                current={page}
                onChange={(newPage) => onChangePage(newPage)}
                total={filterCourseData.length}
                pageSize={PAGE_SIZE}
              />
            </Col>
          </PaginationContainer>
        </Col>
      </Row>
    </SearchContainer>
  );
}

export default SearchPage;
