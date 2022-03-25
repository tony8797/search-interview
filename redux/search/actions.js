const actions = {
  SET_COURSE_DATA: 'SET_COURSE_DATA',
  ADD_COLLECTION_ITEM: 'ADD_COLLECTION_ITEM',
  DELETE_COLLECTION_ITEM: 'DELETE_COLLECTION_ITEM',
  setCourseData: ({
    courseData = [],
    academyData = [],
    courseTypeData = [],
  }) => ({
    type: actions.SET_COURSE_DATA,
    payload: {
      courseData,
      academyData,
      courseTypeData,
    },
  }),
  addCollectionItems: ({ collectionItems = [] }) => ({
    type: actions.ADD_COLLECTION_ITEM,
    payload: {
      collectionItems,
    },
  }),
  deleteCollectionItems: ({ collectionItems = [] }) => ({
    type: actions.DELETE_COLLECTION_ITEM,
    payload: {
      collectionItems,
    },
  }),
};

export default actions;
