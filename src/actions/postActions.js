import * as types from './actionTypes';

export const loadPosts = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((posts) => dispatch({ type: types.LOAD_POSTS, posts }));
	};
};
