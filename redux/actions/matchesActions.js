import { ACTIONS } from './actions';

// get matches
export const getMatches = (usersMatches) => (dispatch) => {
    dispatch({
        type: ACTIONS.GET_USERS_MATCHES,
        payload: usersMatches
    })
}

// create a match
export const createMatch = (usersMatches) => async (dispatch) => {
  try {
    // API call to get the new match!
    const isThereAMatch = await helpCreateMatch()
    // if message says OK, we fetch user data again and set the matches
    
  } catch(err) {
    console.log(err);
  }
}
// update the match status

// delete the match
export const deleteMatch = (matchId, usersMatches) = (dispatch) => {
    const updatedMatch = usersMatches.filter(match => match.id !== matchId)
}

