export const CHECK_BUS = 'CHECK_BUS';
export const UNCHECK_BUS = 'UNCHECK_BUS';

export function checkBus(busCode) {
  return dispatch => {

    dispatch({
      type: CHECK_BUS,
      meta: {
        status: 'REQUEST'
      }
    });

    const cityId = Number(String(busCode)[0]);
    const busId = Number(String(busCode).slice(1));

    fetch(`http://localhost:3000/cities/${cityId}/buses/${busId}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(bus => {
        dispatch({
          type: CHECK_BUS,
          payload: bus,
          meta: {
            status: 'SUCCESS'
          }
        });
      })
      .catch(err => {
        dispatch({
          type: CHECK_BUS,
          meta: {
            status: 'FAILURE'
          }
        });
      });
  };
}

export function uncheckBus() {
  return {
    type: UNCHECK_BUS
  }
}
