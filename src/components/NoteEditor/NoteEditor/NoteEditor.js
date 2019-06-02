import React, { Component } from 'react';

import './NoteEditor.css';

export default class NoteEditor extends Component {
	state = { text: '' };

	handleChange = e => {
		this.setState({ text: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props.addNote(this.state.text);

		this.setState({ text: '' });
	};

	render() {
		return (
			<form className="NoteEditor" onSubmit={this.handleSubmit}>
				<textarea
					className="textarea"
					rows="6"
					value={this.state.text}
					onChange={this.handleChange}
				/>
				<button type="submit">Save</button>
			</form>
		);
	}
}
