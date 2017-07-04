import { ROOT_URL } from '../config.js'
import { GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from '../constants.js'
import axios from 'axios';

function getReposSuccess(repos) {
	return {
		type: GET_REPOS_SUCCESS,
		repos
	}
}

function getReposError(repos) {
	return {
		type: GET_REPOS_ERROR,
		repos
	}
}

export function getRepos(username) {
	return function(dispatch) {
		const data = axios.get(`${ROOT_URL}users/${username}/repos`)
		.then((resp) => {
			dispatch(getReposSuccess(resp));
		})
		.catch((reason) => {
			dispatch(getReposError(reason));
		})
	}
}

