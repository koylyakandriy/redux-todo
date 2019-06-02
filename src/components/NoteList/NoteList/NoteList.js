import React from 'react';
import Note from '../../Note/Note';

import './NoteList.css';

const NoteList = ({ notes = [], deleteNote, toggleNote }) => (
	<div className="NoteList">
		{notes.map(note => (
			<Note
				key={note.id}
				{...note}
				onDelete={() => deleteNote(note.id)}
				onToggleCompleted={() => toggleNote(note.id)}
			/>
		))}
	</div>
);

export default NoteList;
