import { ADD_PROJECT, DELETE_PROJECT, SEARCH_PROJECT, FETCH_PROJECT, VIEW_PROJECT } from '../actions/types';

export default function projectReducer(state = [], action) {
	switch (action.type) {
		case ADD_PROJECT:
			return [...state, action.payload];
		case DELETE_PROJECT:
			return state.filter(project => project._id !== action.payload.id);
		case SEARCH_PROJECT: {
			if (action.value === "") {
				return action.projects;
			}
			console.log(action);
			const {filters} = action;
			if (action.projects) {
				let firstPass = action.projects.filter(project => filters[project.status.toLowerCase()] === true);
				console.log(firstPass.length);
				return firstPass.filter(
					project => 
					(	
						// filter by name and tag properties
						project.name.toLowerCase().includes(action.value) ||
						project.description.toLowerCase().includes(action.value) ||
						project.owner.toLowerCase().includes(action.value) ||
						(project.tags && project.tags.includes(action.value))
					)
				);
			}
		}
		case FETCH_PROJECT:
			return action.projects;
		case VIEW_PROJECT: {
			const { idvalue } = action;
			if (idvalue === "") {
				return action.projects;
			}
			return action.projects.filter(project => project._id.includes(idvalue));
		}
		default:
			return state;
	}
}
