import { createAction } from 'redux-actions';

export const CHECK_BUS = 'CHECK_BUS';
export const UNCHECK_BUS = 'UNCHECK_BUS';
export const SET_BUS_CODE = 'SET_BUS_CODE';
export const RESET_BUS = 'RESET_BUS';

export const uncheckBus = createAction(UNCHECK_BUS);
export const setBusCode = createAction(SET_BUS_CODE);
export const resetBus = createAction(RESET_BUS);

export function checkBus(busCode) {
  const cityId = Number(String(busCode)[0]);
  const busId = Number(String(busCode).slice(1));

  return {
    type: CHECK_BUS,
    payload: {
      url: `/cities/${cityId}/buses/${busId}`,
    },
  };
}
