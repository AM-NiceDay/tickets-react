export const SIGN_IN = 'SIGN_IN';

export function signIn(user) {
  return {
    type: SIGN_IN,
    payload: {
      phoneNumber: user.phoneNumber
    }
  }
}
