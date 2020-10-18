import * as types from '../actions/actionTypes';
import initialState from './initialState';

const postReducer = (state = initialState.posts, action) => {
	switch (action.type) {
		case types.LOAD_POSTS:
			return action.posts;
		default:
			return state;
	}
};
export default postReducer;
