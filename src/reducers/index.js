import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import counterReducer from './counter';
import notifications from './TransitionGroupForm/notifications';

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  count: counterReducer,
  notifications: notifications,
})
