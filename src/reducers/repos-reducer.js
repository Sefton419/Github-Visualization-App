import { GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from '../constants.js';

export default (state = {}, action) => {
	console.log('action in reducer: ', action)
	switch(action.type) {
		case GET_REPOS_SUCCESS:
		case GET_REPOS_ERROR:
			const { repos } = action;
			return {
				repos
			}
		default: 
			return state;
	}
}