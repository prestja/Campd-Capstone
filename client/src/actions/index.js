// index.js

import { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, SEARCH_PROJECT, FETCH_PROJECT, VIEW_PROJECT } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/projects';

export const createProject = ({ name, owner, ownerID, status, description, file }) => {
	return (dispatch) => {
		return axios.post(`${apiUrl}/add`, { name, owner, ownerID, status, description, file })
			.then(response => {
				dispatch(createProjectSuccess(response.data))
			})
			.catch(error => {
				throw (error);
			});
	};
};

export const createProjectSuccess = (data) => {
	return {
		type: ADD_PROJECT,
		payload: {
			_id: data._id,
			name: data.name,
			owner: data.owner,
			ownerID: data.ownerID,
			status: data.status,
			description: data.description,
			file: data.file
		}
	}
};

export const updateProject = ({ _id, name, owner, ownerID, status, description, file }) => {
	return (dispatch) => {
		return axios.post(`${apiUrl}/update`, { _id, name, owner, ownerID, status, description, file })
		.then(response => {
			dispatch(updateProjectSuccess(response.data))
		})
		.catch(error => {
			throw (error);
		});
	};
};

export const ImageProject = ({imageForm}) =>{
	return (dispatch )=>{
		return axios.post('${apiUrl}/projects/Image', imageForm).then((data) => {
			this.setDefualtImage("multer");
		}).catch((err)=>{
			this.setDefualtImage("multer");
		});
	}
}

export const updateProjectSuccess = (data) => {
	return {
		type: UPDATE_PROJECT,
		payload: {
			_id: data._id,
			name: data.name,
			owner: data.owner,
			ownerID: data.ownerID,
			status: data.status,
			description: data.description,
			file: data.file
		}
	}
};

export const deleteProjectSuccess = id => {
	return {
		type: DELETE_PROJECT,
		payload: {
			id
		}
	}
}

export const deleteProject = id => {
	return (dispatch) => {
		return axios.get(`${apiUrl}/delete/${id}`)
			.then(response => {
				dispatch(deleteProjectSuccess(response.data))
			})
			.catch(error => {
				throw (error);
			});
	};
};

export const fetchProjects = (projects) => {
	return {
		type: FETCH_PROJECT,
		projects
	}
};

export const fetchAllProjects = () => {
	return (dispatch) => {
		return axios.get(apiUrl)
			.then(response => {
				dispatch(fetchProjects(response.data))
			})
			.catch(error => {
				throw (error);
			});
	};
};

export const searchProject = (value, projects) => {
	return { type: SEARCH_PROJECT, value, projects };
}

export const searchProjects = (value) => {
	return (dispatch) => {
		return axios.get(apiUrl)
			.then(response => {
				dispatch(searchProject(value, response.data))
			})
			.catch(error => {
				throw (error);
			});
	};
};

export const viewProject = (idvalue, projects) => {
	return { type: VIEW_PROJECT, idvalue, projects }
}

export const viewProjects = (idvalue) => {
	return (dispatch) => {
		return axios.get(apiUrl)
			.then(response => {
				dispatch(viewProject(idvalue, response.data))
			})
			.catch(error => {
				throw (error);
			});
	};
};
