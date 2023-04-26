import {combineReducers} from 'redux';
import counter from './counter';
import navigate from './navigate';
const rootReducer = combineReducers({
  counter,
  navigate,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
