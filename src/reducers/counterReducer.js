import * as types from '../actions/actionTypes';
import initialState from './initialState';

const counterReducer = (state = initialState.counter, action) => {
	switch (action.type) {
		case types.INCREMENT:
			return state + 1;
		case types.DECREMENT:
			return state - 1;
		default:
			return state;
	}
};
export default counterReducer;
