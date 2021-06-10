import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { poolOfBooksReducer } from './poolOfBooksReducer';
import { savedBooksReducer } from './savedBooksReducer';
import { matchesReducer } from './matchesReducer';
import { usersBooksReducer } from './usersBooksReducer';
import { tokenReducer } from './tokenReducer';

const rootReducer = combineReducers({
  user: userReducer,
  poolOfBooks: poolOfBooksReducer,
  savedBooks: savedBooksReducer,
  usersBooks: usersBooksReducer,
  matches: matchesReducer,
  token: tokenReducer,
});

export default rootReducer;
