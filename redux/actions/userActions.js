import { ACTIONS } from './actions';
import {
  helpSignupUser,
  helpLoginUser,
  helpUpdateUser,
  helpLogOut,
} from '../../utils/apiCalls';

export const signUpUser = (data) => async (dispatch) => {
  try {
    const res = await helpSignupUser(data);
    dispatch({
      type: ACTIONS.SIGNUP_USER,
      payload: res.user,
    });
    dispatch({
      type: ACTIONS.SET_TOKEN,
      payload: res.token,
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
      payload: res.user,
    });
    dispatch({
      type: ACTIONS.SET_TOKEN,
      payload: res.token,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (data, token) => async (dispatch) => {
  try {
    const res = await helpUpdateUser(data, token);
    dispatch({
      type: ACTIONS.UPDATE_USER,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = () => (dispatch) => {
  dispatch({
    type: ACTIONS.DELETE_TOKEN,
  });
  dispatch({
    type: ACTIONS.DELETE_USER,
  });
};

export const logOutUser = () => async (dispatch) => {
  try {
    await helpLogOut();
    dispatch({
      type: ACTIONS.DELETE_TOKEN,
    });
    dispatch({
      type: ACTIONS.LOGOUT_USER,
      payload: null,
    });
  } catch (err) {
    console.log(err);
  }
};
