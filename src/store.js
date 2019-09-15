import { createStore, combineReducers} from 'redux';
import toDoList from './reducers/toDoList';
import searchTerm from './reducers/searchTerm';
import folderName from './reducers/folderName';
import chooseFolder from './reducers/chooseFolder';
import newFolderName from './reducers/newFolderName';

export default createStore(
    combineReducers({
        toDoList,
        searchTerm,
        folderName,
        chooseFolder,
        newFolderName
    })
)