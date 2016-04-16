import { get, post } from '../utils/fetch';
import { createAction } from 'redux-actions';

export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_NAME = 'SET_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const GET_USER_INFO = 'GET_USER_INFO';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';
export const SET_NEXT_PATHNAME = 'SET_NEXT_PATHNAME';

export const setPhoneNumber = createAction(SET_PHONE_NUMBER);
export const setName = createAction(SET_NAME);
export const setLastName = createAction(SET_LAST_NAME);
export const setNextPathname = createAction(SET_NEXT_PATHNAME);

export function getUserInfo(phoneNumber) {
  return {
    type: GET_USER_INFO,
    payload: {
      url: `/users/${phoneNumber}`,
    },
  };
}

export function signIn(phoneNumber, password) {
  return {
    type: 'SIGN_IN',
    payload: {
      url: '/authenticate',
      method: 'post',
      body: {
        phoneNumber,
        password,
      },
    },
  };
}

export function signUp(phoneNumber, name, lastName, password) {
  return {
    type: 'SIGN_UP',
    payload: {
      promise: post('/users', {
        name,
        phoneNumber,
        lastName,
        password,
      }),
    },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
