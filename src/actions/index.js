import { ROOT_URL } from '../config.js'
import { GET_REPOS_SUCCESS, GET_REPOS_ERROR, GET_COMMITS_SUCCESS, GET_COMMITS_ERROR } from '../constants.js'
import axios from 'axios';

function getReposSuccess(repos) {
	return {
		type: GET_REPOS_SUCCESS,
		repos
	}
}

function getReposError(err) {
	return {
		type: GET_REPOS_ERROR,
		err
	}
}

export function getRepos(username) {
	return function(dispatch) {
		// template strings are a convenient new way to concatenate strings without previous baggage
		axios.get(`${ROOT_URL}users/${username}/repos`)
		.then((resp) => {
			dispatch(getReposSuccess(resp));
		})
		.catch((err) => {
			dispatch(getReposError(err));
		})
	}
}

function getCommitsSuccess(commits) {
	return {
		type: GET_COMMITS_SUCCESS,
		commits
	}
}

function getCommitsError(err) {
	return {
		type: GET_COMMITS_ERROR,
		err
	}
}

export function getCommits(username, repo) {
	return function(dispatch) {
		axios.get(`${ROOT_URL}repos/${username}/${repo}/commits`)
		.then((resp) => {
			dispatch(getCommitsSuccess(resp));
		})
		.catch((err) => {
			dispatch(getCommitsError(err));
		});
	}
}

