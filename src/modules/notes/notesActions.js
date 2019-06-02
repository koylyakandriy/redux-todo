import shortId from 'shortid';
import {
	ADD_SUCCESS,
	DELETE_SUCCESS,
	TOGGLE_COMPLETED,
	CHANGE_FILTER,
	FETCH_REQUEST,
	FETCH_SUCCESS,
	FETCH_ERROR,
} from './noteActionsTypes';

const toggleNote = id => ({
	type: TOGGLE_COMPLETED,
	payload: id,
});

const changeFilter = filter => ({
	type: CHANGE_FILTER,
	payload: filter,
});

const fetchRequest = () => ({
	type: FETCH_REQUEST,
});

const fetchSuccess = notes => ({
	type: FETCH_SUCCESS,
	payload: notes,
});

const addNoteSuccess = note => ({
	type: ADD_SUCCESS,
	payload: note,
});

const deleteNoteSuccess = id => ({
	type: DELETE_SUCCESS,
	payload: id,
});

const fetchError = error => ({
	type: FETCH_ERROR,
	payload: error,
});

export {
	toggleNote,
	changeFilter,
	fetchRequest,
	fetchSuccess,
	fetchError,
	addNoteSuccess,
	deleteNoteSuccess
};
