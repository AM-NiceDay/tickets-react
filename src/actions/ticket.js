import { get, post } from '../utils/fetch';

export const BUY_TICKET = 'BUY_TICKET';
export const GET_TICKET = 'GET_TICKET';
export const GET_BUS_TICKETS = 'GET_BUS_TICKETS';

export function getLastTicket(userId) {
  return {
    type: GET_TICKET,
    payload: {
      promise: get(`/users/${userId}/tickets?limit=1`)
        .then(tickets => {
          return tickets[0];
        })
    }
  }
}

export function buyTicket(userId, busCode) {

  const cityId = Number(String(busCode)[0]);
  const busId = Number(String(busCode).slice(1));

  return {
    type: BUY_TICKET,
    payload: {
      data: {
        busCode
      },
      promise: post(`/cities/${cityId}/buses/${busId}/tickets`, {
        userId
      })
    }
  };
}

export function getBusTickets(busCode) {
  const cityId = Number(String(busCode)[0]);
  const busId = Number(String(busCode).slice(1));

  return {
    type: GET_BUS_TICKETS,
    payload: {
      promise: get(`/cities/${cityId}/buses/${busId}/tickets`)
    }
  };
}
