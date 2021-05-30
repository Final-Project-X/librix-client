import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { poolOfBooksReducer } from './poolOfBooksReducer';
import { savedBooksReducer } from './savedBooksReducer';
import { matchesReducer } from './matchesReducer';
import { usersBooksReducer } from './usersBooksReducer';

const rootReducer = combineReducers({
  user: userReducer,
  poolOfBooks: poolOfBooksReducer,
  savedBooks: savedBooksReducer,
  usersBooks: usersBooksReducer,
  matches: matchesReducer,
});

export default rootReducer;
