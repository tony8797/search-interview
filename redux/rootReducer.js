import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import search from '@/redux/search/reducers';

const combinedReducer = combineReducers({
  search,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }

  return combinedReducer(state, action);
};

export default rootReducer;
