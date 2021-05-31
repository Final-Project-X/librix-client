import { ACTIONS } from './actions';
import {
  helpCreateMatch,
  helpFetchUser,
  helpUpdateMatch,
  helpDeleteMatch,
  helpGetUserMatches,
} from '../../utils/apiCalls';

// get matches
export const getMatches = (userID) => async (dispatch) => {
  try {
    const userMatches = await helpGetUserMatches(userID);
    console.log('hi from getMatches', userMatches);
    dispatch({
      type: ACTIONS.GET_USERS_MATCHES,
      payload: userMatches,
    });
  } catch (err) {
    console.log(err);
  }
};

// create a match
export const createMatch = (userId, bookId) => async (dispatch) => {
  try {
    const isThereAMatch = await helpCreateMatch({ userId, bookId });
    // if message says OK, we fetch user data again and set the matches
    // on success, we use the following message
    //TODO and show the (alert?) message to the user
    // (alert: continue swiping / go to matches)
    // `You got ${matchesArray.length} matches`
    console.log('log from the match checker', isThereAMatch);

    if (isThereAMatch.response.message.slice(0, 7) === 'You got') {
      const updatedUser = await helpFetchUser(userId);
      //TODO check if the sorting function works
      const matches = updatedUser.matches.sort(
        (a, b) => a.createdAt - b.createdAt,
      );
      dispatch({
        type: ACTIONS.CREATE_MATCH,
        payload: matches,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// update the match status to 'rejected' or 'exchanged'
// we might not need it
export const updateMatchStatus =
  (matchId, newStatus, matches) => async (dispatch) => {
    try {
      const updatedMatch = await helpUpdateMatch({
        id: matchId,
        status: newStatus,
      });
      const updatedMatchesArray = matches
        .map((match) => (match._id === matchId ? updatedMatch : match))
        .filter((match) => match.status === 'pending');
      dispatch({
        type: ACTIONS.UPDATE_MATCH,
        payload: updatedMatchesArray,
      });
    } catch (err) {
      console.log(err);
    }
  };

// delete the match when match is rejected (or when the deal is done)
export const deleteMatch = (matchId, usersMatches) => async (dispatch) => {
  try {
    await helpDeleteMatch(matchId);
    const updatedMatches = usersMatches.filter(
      (match) => match._id !== matchId,
    );
    dispatch({
      type: ACTIONS.DELETE_MATCH,
      payload: updatedMatches,
    });
  } catch (err) {
    console.log(err);
  }
};
