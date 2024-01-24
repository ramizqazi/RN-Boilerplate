import {combineReducers} from 'redux';

import authReducer from '../auth/redux/authSlice';

/* ============================================================================
  Combine ALl Reducers
============================================================================= */
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
