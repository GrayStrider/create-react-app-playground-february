import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import tasks from './tasks';
import data from './data';
import currentlySelected from './currentlySelected';

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  tasks: tasks,
  currentlySelected: currentlySelected,
  data: data
})
