import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  sessionReducer,
  errorsReducer
});
