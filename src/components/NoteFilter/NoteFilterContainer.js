import { connect } from 'react-redux';
import NoteFilter from './NoteFilter/NoteFilter';
import { changeFilter } from '../../modules/notes/notesActions';
import { getFilter } from '../../modules/notes/notesSelectors';

const mapStateToProps = state => ({ value: getFilter(state) });

const mapDispatchToProps = { onChange: changeFilter };

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(NoteFilter);
