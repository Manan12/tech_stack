import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';


//we have created a reducer named librarues which will always return a array
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
