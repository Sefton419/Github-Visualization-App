import { GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from '../constants.js';

export default (state = null, action) => {
	switch(action.type) {
		case GET_REPOS_SUCCESS:
			const { repos } = action;
			return {
				repos
			}
		default: 
			return state;
	}
}