import { SET_SELECTED } from '../constants/ActionTypes';
import { pull } from 'lodash';

const currentlySelected = (state = [0, 1], action) => {
  switch (action.type) {

    case SET_SELECTED: {
      if (action.modifier === null) {
        return state.includes(action.payload)
          ? pull([...state], action.payload)
          : [action.payload]
      }

      else if (action.modifier === "Ctrl") {
        return state.includes(action.payload)
          ? pull([...state], action.payload)
          : [...state, action.payload];
      }

      else if (action.modifier === "Delete") {
        return state.includes(action.payload)
          ? pull([...state], action.payload)
          : state;
      }

      else return state // TODO Shift (after task order implementation)
    }

    default:
      return state;
  }
};

export default currentlySelected;
