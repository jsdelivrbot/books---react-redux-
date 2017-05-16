import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './activeBook';

const rootReducer = combineReducers({
	books:  BooksReducer,
	activeBook : ActiveBook
});

export default rootReducer;
