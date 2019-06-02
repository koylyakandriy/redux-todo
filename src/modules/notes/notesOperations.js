import axios from 'axios';
import {
	addNoteSuccess,
	deleteNoteSuccess,
	fetchError,
	fetchRequest,
	fetchSuccess,
} from './notesActions';

export const fetchNotes = () => async dispatch => {
	dispatch(fetchRequest());

	try {
		const response = await axios.get('http://localhost:3001/notes');
		dispatch(fetchSuccess(response.data));
	} catch (error) {
		dispatch(fetchError(error));
	}
};

export const addNote = text => dispatch => {
	dispatch(fetchRequest());

	axios
		.post('http://localhost:3001/notes', { text, completed: false })
		.then(({ data }) => dispatch(addNoteSuccess(data)))
		.catch(error => dispatch(fetchError(error)));
};

export const deleteNote = id => dispatch => {
	dispatch(fetchRequest());

	axios
		.delete(`http://localhost:3001/notes/${id}`)
		.then(() => dispatch(deleteNoteSuccess(id)))
		.catch(error => dispatch(fetchError(error)));
};
