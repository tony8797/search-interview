const actions = {
  SET_COURSE_DATA: 'SET_COURSE_DATA',
  SET_COURSE_ITEM_IS_COLLECTION: 'SET_COURSE_ITEM_IS_COLLECTION',
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
  setCourseItemIsCollection: ({
    courseData,
  }) => ({
    type: actions.SET_COURSE_ITEM_IS_COLLECTION,
    payload: {
      courseData,
    },
  }),
};

export default actions;
