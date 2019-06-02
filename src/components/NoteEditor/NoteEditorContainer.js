import { connect } from 'react-redux';
import NoteEditor from './NoteEditor/NoteEditor';

import { addNote } from '../../modules/notes/notesOperations';

const mapDispatchToProps = { addNote: addNote };

export default connect(
	null,
	mapDispatchToProps,
)(NoteEditor);
