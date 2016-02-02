export const BUY_TICKET = 'BUY_TICKET';

export function buyTicket(userId, busCode) {
  return dispatch => {

    dispatch({
      type: BUY_TICKET,
      payload: {
        busCode,
        dateCreated: new Date()
      },
      meta: {
        status: 'REQUEST'
      }
    });

    const cityId = Number(String(busCode)[0]);
    const busId = Number(String(busCode).slice(1));

    fetch(`http://localhost:3000/cities/${cityId}/buses/${busId}/tickets`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId
      })
    })
      .then(response => response.json())
      .then(ticket => {
        dispatch({
          type: BUY_TICKET,
          payload: ticket,
          meta: {
            status: 'SUCCESS'
          }
        });
      });
  };
}
