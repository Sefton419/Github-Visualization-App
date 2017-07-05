import { combineReducers } from 'redux';

import repos from '../reducers/repos-reducer.js';
import commits from '../reducers/commits-reducer.js';

const rootReducer = combineReducers({
	repos,
	commits
})

export default rootReducer;