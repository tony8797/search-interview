import axios from 'axios';
import SearchPage from '@/contexts/search';
import searchActions from '@/redux/search/actions';
import reduxStore from '@/redux/store';
import searchData from '@/datas/course';

const { courseTypeList } = searchData;
const { wrapper } = reduxStore;

function Search() {
  return (
    <SearchPage />
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const courseDataRes = await axios.get('/fullSearch');

  if (courseDataRes.status === 200) {
    const courseData = courseDataRes.data?.data?.searchRlt || [];
    const academyData = courseDataRes.data?.data?.academy || [];
    const academyWithCourseData = academyData.map((ele) => {
      const academyCourse = courseData.filter((academyCourseEle) => (
        ele.firstCategoryUid === academyCourseEle.firstCategoryUid
      ));
      return { ...ele, courseTotal: academyCourse.length };
    });
    const courseTypeData = courseTypeList.map((ele) => {
      const academyCourse = courseData.filter((academyCourseEle) => (
        ele.value === academyCourseEle.courseType
      ));
      return { ...ele, courseTotal: academyCourse.length };
    });
    store.dispatch(
      searchActions.setCourseData({
        courseData,
        academyData: academyWithCourseData,
        courseTypeData,
      }),
    );
  }

  return {
    props: {},
  };
});

export default Search;
