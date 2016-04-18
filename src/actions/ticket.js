import { get, post } from '../utils/fetch';
import { createAction } from 'redux-actions';

export const BUY_TICKET = 'BUY_TICKET';
export const GET_TICKET = 'GET_TICKET';
export const GET_BUS_TICKETS = 'GET_BUS_TICKETS';
export const SET_TICKET_ID = 'SET_TICKET_ID';
export const SET_IS_CHECKED = 'SET_IS_CHECKED';
export const RESET_TICKET = 'RESET_TICKET';

export const setTicketId = createAction(SET_TICKET_ID);
export const setIsChecked = createAction(SET_IS_CHECKED);
export const resetTicket = createAction(RESET_TICKET);

export function getLastTicket(userId) {
  return {
    type: GET_TICKET,
    payload: {
      url: `/users/${userId}/tickets?limit=1`,
    },
  };
}

export function buyTicket(userId, busCode) {
  const cityId = Number(String(busCode)[0]);
  const busId = Number(String(busCode).slice(1));

  return {
    type: BUY_TICKET,
    payload: {
      url: `/cities/${cityId}/buses/${busId}/tickets`,
      method: 'post',
      body: {
        userId,
      },
    },
  };
}

export function getBusTickets(busCode) {
  const cityId = Number(String(busCode)[0]);
  const busId = Number(String(busCode).slice(1));

  return {
    type: GET_BUS_TICKETS,
    payload: {
      url: `/cities/${cityId}/buses/${busId}/tickets`,
    },
  };
}
