import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteList from './NoteList/NoteList';

import { getVisibleNotes } from '../../modules/notes/notesSelectors';
import { toggleNote } from '../../modules/notes/notesActions';
import { fetchNotes, deleteNote } from '../../modules/notes/notesOperations';

class NoteListContainer extends Component {
	state = {};

	componentDidMount() {
		this.props.fetchNotes();
	}

	render() {
		return <NoteList {...this.props} />;
	}
}

const mapStateToProps = state => ({
	notes: getVisibleNotes(state),
});

const mapDispatchToProps = { deleteNote, toggleNote, fetchNotes };

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(NoteListContainer);
