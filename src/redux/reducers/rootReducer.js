// @flow

import { ADD_INITIAL_ITEMS, ADD_MORE_ITEMS, REMOVE_ITEM } from '../actionTypes';

const initialStoreState = {
  data: [],
};

const dataReducer = (state = initialStoreState, action): Object => {
  switch (action.type) {
    case ADD_INITIAL_ITEMS: {
      return {
        ...state,
        data: action.payload.content,
      };
    }
    case ADD_MORE_ITEMS: {
      return { ...state, data: state.data.concat(action.payload.content) };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        data: state.data.filter((el) => {
          return el.key !== action.payload.key;
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export default dataReducer;
