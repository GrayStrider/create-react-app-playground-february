import {
  ADD_DATA,
  ADD_TODO,
  DELETE_TODO,
  SET_SELECTED,
  TOGGLEDONE,
} from '../constants/ActionTypes';

export function toggleDone(id) {
  return {
    type: TOGGLEDONE,
    id,
  };
}

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}

export function deleteTask(payload) {
  return {
    type: DELETE_TODO,
    payload,
  };
}

export function setSelected(payload, modifier) {
  return {
    type: SET_SELECTED,
    payload,
    modifier,
  };
}

export function addData(payload) {
  return {
    type: ADD_DATA,
    payload,
  };
}







