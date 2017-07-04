import { ROOT_URL } from '../config.js'
import { GET_REPOS } from '../constants.js'
import axios from 'axios';


export function getRepos(username) {

	const data = axios.get(`${ROOT_URL}users/${username}/repos`)
	.then((resp) => {
		return resp;
	})
	.catch((err) => {
		return err;
	})

	return {
		type: GET_REPOS,
		data
	}
}