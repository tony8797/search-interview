import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { FaChevronDown } from 'react-icons/fa';
import searchData from '@/datas/course';
import searchConditionStyle from '@/contexts/search/condition/index.style';

const { courseTimeList } = searchData;
const {
  SearchConditionContainer,
  BlockList,
  Split,
  ResetCondition,
} = searchConditionStyle;

function SearchCondition({
  filterCourseType,
  seFilterCourseType,
  filterAcademyType,
  seFilterAcademyType,
  filterTime,
  setFilterTime,
  hasCondition,
}) {
  const { academyData = [], courseTypeData = [] } = useSelector((state) => state.search);
  const [isOpenCourse, setIsOpenCourse] = useState(true);
  const [isOpenAcademy, setIsOpenAcademy] = useState(true);
  const [isOpenTime, setIsOpenTime] = useState(true);

  return (
    <>
      <SearchConditionContainer>
        <ResetCondition>
          <Col xs={8} className="reset-col reset-col-title">課程篩選條件</Col>
          {
            hasCondition
              ? (
                <Col
                  xs={4}
                  className="reset-col reset-col-button"
                  onClick={() => {
                    seFilterCourseType([], true);
                    seFilterAcademyType([], true);
                    setFilterTime([], true);
                  }}
                >
                  全部清除
                </Col>
              )
              : null
          }
        </ResetCondition>
        {
          courseTypeData?.length
            ? (
              <BlockList sx={12} isOpen={isOpenCourse}>
                <Box className="block-list-header">
                  <Box>課程類型</Box>
                  <Box
                    onClick={() => setIsOpenCourse(!isOpenCourse)}
                    className="chevron-icon"
                  >
                    <FaChevronDown />
                  </Box>
                </Box>
                <Box className="block-list-content">
                  {
                    courseTypeData.map((ele) => (
                      ele.courseTotal
                        ? (
                          <Box key={ele.value} sx={{ mb: 1 }} className="block-list-content-item">
                            <Form.Check
                              type="checkbox"
                              id={`academyData${ele.value}`}
                              label={`${ele.name} (${ele.courseTotal})`}
                              checked={filterCourseType.includes(ele.value)}
                              onChange={() => seFilterCourseType(ele.value)}
                            />
                          </Box>
                        )
                        : null
                    ))
                  }
                </Box>
                <Split />
              </BlockList>
            )
            : null
        }
        {
          academyData?.length
            ? (
              <BlockList sx={12} isOpen={isOpenAcademy}>
                <Box className="block-list-header">
                  <Box>課程類型</Box>
                  <Box
                    onClick={() => setIsOpenAcademy(!isOpenAcademy)}
                    className="chevron-icon"
                  >
                    <FaChevronDown />
                  </Box>
                </Box>
                <Box className="block-list-content">
                  {
                    academyData.map((ele) => (
                      <Box key={ele.firstCategoryUid} sx={{ mb: 1 }} className="block-list-content-item">
                        <Form.Check
                          type="checkbox"
                          id={`academyData${ele.firstCategoryUid}`}
                          label={`${ele.firstCategoryName} (${ele.courseTotal})`}
                          checked={filterAcademyType.includes(ele.firstCategoryUid)}
                          onChange={() => seFilterAcademyType(ele.firstCategoryUid)}
                        />
                      </Box>
                    ))
                  }
                </Box>
              </BlockList>
            )
            : null
        }
      </SearchConditionContainer>
      <SearchConditionContainer>
        {
          courseTimeList?.length
            ? (
              <BlockList sx={12} isOpen={isOpenTime}>
                <Box className="block-list-header">
                  <Box>培訓時長</Box>
                  <Box
                    onClick={() => setIsOpenTime(!isOpenTime)}
                    className="chevron-icon"
                  >
                    <FaChevronDown />
                  </Box>
                </Box>
                <Box className="block-list-content">
                  {
                    courseTimeList.map((ele) => (
                      <Box key={ele.value} sx={{ mb: 1 }} className="block-list-content-item">
                        <Form.Check
                          type="checkbox"
                          id={`academyData${ele.value}`}
                          label={ele.name}
                          checked={filterTime.includes(ele.value)}
                          onChange={() => setFilterTime(ele.value)}
                        />
                      </Box>
                    ))
                  }
                </Box>
              </BlockList>
            )
            : null
        }
      </SearchConditionContainer>
    </>
  );
}

SearchCondition.propTypes = {
  filterCourseType: PropTypes.oneOfType([PropTypes.array]),
  seFilterCourseType: PropTypes.func,
  filterAcademyType: PropTypes.oneOfType([PropTypes.array]),
  seFilterAcademyType: PropTypes.func,
  filterTime: PropTypes.oneOfType([PropTypes.array]),
  setFilterTime: PropTypes.func,
  hasCondition: PropTypes.number,
};

SearchCondition.defaultProps = {
  filterCourseType: [],
  seFilterCourseType: () => { },
  filterAcademyType: [],
  seFilterAcademyType: () => { },
  filterTime: [],
  setFilterTime: () => { },
  hasCondition: 0,
};

export default SearchCondition;
