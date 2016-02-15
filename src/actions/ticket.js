import { post } from '../utils/fetch';

export const BUY_TICKET = 'BUY_TICKET';

export function buyTicket(userId, busCode) {

  const cityId = Number(String(busCode)[0]);
  const busId = Number(String(busCode).slice(1));

  return {
    type: BUY_TICKET,
    payload: {
      data: {
        busCode,
        dateCreated: new Date()
      },
      promise: post(`/cities/${cityId}/buses/${busId}/tickets`, {
        userId
      })
    }
  };
}
