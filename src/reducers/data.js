import {ADD_DATA} from '../constants/ActionTypes';

const data = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA: {
      return [action.payload]
    }
    default:
      return state;
  }
};

export default data;
