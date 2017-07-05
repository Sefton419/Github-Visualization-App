import { GET_COMMITS_SUCCESS } from '../constants.js';

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