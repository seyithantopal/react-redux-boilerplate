import { combineReducers } from 'redux';
import postReducer from './postReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
	posts: postReducer,
	counter: counterReducer,
});

export default rootReducer;
