import actions from '@/redux/search/actions';

const initState = {
  courseData: [],
  academyData: [],
  courseTypeData: [],
  collectionItems: [],
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
    case actions.ADD_COLLECTION_ITEM:
      return {
        ...state,
        collectionItems: action.payload.collectionItems,
      };
    case actions.DELETE_COLLECTION_ITEM:
      return {
        ...state,
        collectionItems: action.payload.collectionItems,
      };
    default:
      return state;
  }
}
