export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';

export function signIn(user) {
  return dispatch => {

    dispatch({
      type: SIGN_IN,
      payload: {
        phoneNumber: user.phoneNumber
      },
      meta: {
        status: 'REQUEST'
      }
    });

    fetch('http://localhost:3000/authenticate', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber: user.phoneNumber,
        password: user.password
      })
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch({
          type: SIGN_IN,
          payload: {
            token: response.token,
            user: response.user
          },
          meta: {
            status: 'SUCCESS'
          }
        });
      });
  };
}

export function logout() {
  return {
    type: LOGOUT
  }
}
