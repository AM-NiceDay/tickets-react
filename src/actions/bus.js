export const CHECK_BUS = 'CHECK_BUS';
export const UNCHECK_BUS = 'UNCHECK_BUS';

export function checkBus(busId) {
  return dispatch => {

    dispatch({
      type: CHECK_BUS,
      meta: {
        status: 'REQUEST'
      }
    });

    fetch(`http://localhost:3000/buses/${busId}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(bus => {
        console.log(bus);
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
