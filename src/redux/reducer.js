import {increType} from './types';

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case increType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case increType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
