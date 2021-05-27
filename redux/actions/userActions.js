import { ACTIONS } from './actions';
import { helpSignupUser, helpLoginUser } from '../../utils/apiCalls';

export const signUpUser = (data) => async (dispatch) => {
  const res = await helpSignupUser(data);
  dispatch({
    type: ACTIONS.SIGNUP_USER,
    payload: res,
  });
};

export const loginUser = (loginData) => async (dispatch) => {
  const res = await helpLoginUser(loginData);
  dispatch({
    type: ACTIONS.LOGIN_USER,
    payload: res,
  });
};
