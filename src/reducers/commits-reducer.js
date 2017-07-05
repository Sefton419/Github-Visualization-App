import { GET_COMMITS, GET_COMMITS_SUCCESS, GET_COMMITS_ERROR } from '../constants.js';

export default (state = null, action) => {
	switch(action.type) {
		case GET_COMMITS_SUCCESS:
			const { commits } = action;
			return {
				commits
			}
		default: 
			return state;
	}
}