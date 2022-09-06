import {increType} from './types';

export function incrementAction(data) {
  return {
    type: increType.INCREMENT,
    payload: data,
  };
}

export function decrementAction(data) {
  return {
    type: increType.DECREMENT,
    payload: data,
  };
}
