// @flow

import { ADD_INITIAL_ITEMS, ADD_MORE_ITEMS, REMOVE_ITEM } from './actionTypes';

export const addInitialItems = (content): Object => ({
  type: ADD_INITIAL_ITEMS,
  payload: {
    content,
  },
});

export const addMoreItems = (content): Object => ({
  type: ADD_MORE_ITEMS,
  payload: {
    content,
  },
});

export const removeItem = (key): Object => ({
  type: REMOVE_ITEM,
  payload: {
    key,
  },
});
