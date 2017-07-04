import { combineReducers } from 'redux';

import repos from '../reducers/repos-reducer.js';

const rootReducer = combineReducers({
	repos
})

export default rootReducer;