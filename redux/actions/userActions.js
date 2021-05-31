import { ACTIONS } from './actions';
import { helpSignupUser, helpLoginUser } from '../../utils/apiCalls';

export const signUpUser = (data) => async (dispatch) => {
  try {
    const res = await helpSignupUser(data);
    dispatch({
      type: ACTIONS.SIGNUP_USER,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const res = await helpLoginUser(loginData);
    dispatch({
      type: ACTIONS.LOGIN_USER,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};
