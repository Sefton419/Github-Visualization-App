import { GET_REPOS_SUCCESS } from '../constants.js';

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