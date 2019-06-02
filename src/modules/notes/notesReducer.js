import { combineReducers } from 'redux';
import * as types from './noteActionsTypes';

function notesReducer(state = [], { type, payload }) {
	switch (type) {
		case types.FETCH_SUCCESS:
			return payload;

		case types.ADD_SUCCESS:
			return [...state, payload];

		case types.DELETE_SUCCESS:
			return state.filter(item => item.id !== payload);

		case types.TOGGLE_COMPLETED:
			return state.map(item =>
				item.id === payload ? { ...item, completed: !item.completed } : item,
			);

		default:
			return state;
	}
}

function filterReducer(state = '', { type, payload }) {
	switch (type) {
		case types.CHANGE_FILTER:
			return payload;

		default:
			return state;
	}
}

function loadingReducer(state = false, { type, payload }) {
	switch (type) {
		case types.FETCH_REQUEST:
			return true;

		case types.FETCH_SUCCESS:
		case types.FETCH_ERROR:
			return false;

		default:
			return state;
	}
}

function errorReducer(state = null, { type, payload }) {
	switch (type) {
		case types.FETCH_REQUEST:
			return null;
		case types.FETCH_ERROR:
			return payload;
		default:
			return state;
	}
}

export default combineReducers({
	items: notesReducer,
	filter: filterReducer,
	error: errorReducer,
	loading: loadingReducer,
});
