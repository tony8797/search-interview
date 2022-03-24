import actions from '@/redux/search/actions';

const initState = {
  courseData: [],
  academyData: [],
  courseTypeData: [],
};

export default function reducer(state = initState, action = '') {
  switch (action.type) {
    case actions.SET_COURSE_DATA:
      return {
        ...state,
        courseData: action.payload.courseData,
        academyData: action.payload.academyData,
        courseTypeData: action.payload.courseTypeData,
      };
    case actions.SET_COURSE_ITEM_IS_COLLECTION:
      return {
        ...state,
        courseData: action.payload.courseData,
      };
    default:
      return state;
  }
}
