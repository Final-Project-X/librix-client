import { combineReducers } from 'redux';
import { userReducer } from './useReducer';
import { poolOfBooksReducer } from './poolOfBooksReducer';
import { savedBooksReducer } from './savedBooksReducer';
import { usersBooksReducer } from './usersBooksReducer';
const rootReducer = combineReducers({
  user: userReducer,
  poolOfBooks: poolOfBooksReducer,
  savedBooks: savedBooksReducer,
  usersBooks: usersBooksReducer,
  matches: matchesReducer,
});

export default rootReducer;
