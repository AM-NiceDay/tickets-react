import { get } from '../utils/fetch';

export const CHECK_BUS = 'CHECK_BUS';
export const UNCHECK_BUS = 'UNCHECK_BUS';

export function checkBus(busCode) {

  const cityId = Number(String(busCode)[0]);
  const busId = Number(String(busCode).slice(1));

  return {
    type: CHECK_BUS,
    payload: {
      data: {
        busCode: busCode
      },
      promise: get(`/cities/${cityId}/buses/${busId}`)
    }
  };
}

export function uncheckBus() {
  return {
    type: UNCHECK_BUS
  }
}
