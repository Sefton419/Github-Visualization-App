import { GET_REPOS } from '../constants.js';

export default (state = {}, action) => {
	switch(action.type) {
		case GET_REPOS:
			const { data } = action;
			return {
				data
			}
		default: 
			return state;
	}
}