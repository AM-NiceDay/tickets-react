let store;

export function get(url) {
  const authToken = store ? store.getState().user.get('token') : '';

  return fetch(`http://localhost:3000${url}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': authToken || ''
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
}

export function post(url, data) {
  const authToken = store ? store.getState().user.get('token') : '';

  return fetch(`http://localhost:3000${url}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': authToken || ''
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
}

export function init(reduxStore) {
  store = reduxStore;
}
