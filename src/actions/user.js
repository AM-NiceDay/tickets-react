import { get, post } from '../utils/fetch';

export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const GET_USER_INFO = 'GET_USER_INFO';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';

export function setPhoneNumber(phoneNumber) {
  return {
    type: 'SET_PHONE_NUMBER',
    payload: {
      phoneNumber
    }
  };
}

export function getUserInfo(phoneNumber) {
  return {
    type: GET_USER_INFO,
    payload: {
      promise: get(`/users/${phoneNumber}`)
    }
  };
}

export function signIn(phoneNumber, password) {
  return {
    type: 'SIGN_IN',
    payload: {
      promise: post('/authenticate', {
        phoneNumber,
        password
      })
    }
  };
}

export function signUp(user) {
  return {
    type: 'SIGN_UP',
    payload: {
      data: user,
      promise: post('/users', {
        name: user.name,
        phoneNumber: user.phoneNumber,
        email: user.email,
        password: user.password
      })
    }
  };
}

export function logout() {
  return {
    type: LOGOUT
  }
}
