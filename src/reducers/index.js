import { combineReducers } from 'redux';
import { listsReducer } from './ListReducer';

const rootReducers = combineReducers({
  listData: listsReducer,
});

export default rootReducers;
