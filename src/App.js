import React from 'react';
import AppHeader from "./components/AppHeader/AppHeader";
import NoteEditorContainer from './components/NoteEditor';
import NoteListContainer from './components/NoteList';
// const notes = [
// 	{
// 		id: 1,
// 		text:
// 			'To begin the development, run npm start or yarn start. To create a production bundle, use npm run build or yarn build',
// 		completed: true
// 	},
// 	{
// 		id: 2,
// 		text:
// 			'To begin the development, run npm start or yarn start. To create a production bundle, use npm run build or yarn build',
// 		completed: false
// 	},
// 	{
// 		id: 3,
// 		text:
// 			'Eun npm start or yarn start. To begin the development. To create a production bundle, use npm run build or yarn build',
// 		completed: true
// 	},
// 	{
// 		id: 4,
// 		text:
// 			'To begin the development, run npm start or yarn start. To create a production bundle, use npm run build or yarn build',
// 		completed: false
// 	}
// ];

const App = () => (
	<div>
		<h1>Todo List</h1>
		<AppHeader />
		<NoteEditorContainer />
		<NoteListContainer />
	</div>
);

export default App;
