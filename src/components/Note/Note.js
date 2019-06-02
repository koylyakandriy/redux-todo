import React from 'react';
import './Note.css';

const Note = ({ text, completed, onDelete, onToggleCompleted }) => (
	<div className="Note">
		<p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
			{text}
		</p>
		
		<hr />
		<footer className="footer"
		>
			<label style={{ cursor: 'pointer' }}>
				Completed
				<input
					type="checkbox"
					checked={completed}
					onChange={onToggleCompleted}
				/>
			</label>
			
			<button onClick={onDelete}>Delete</button>
		</footer>
	</div>
);

export default Note;