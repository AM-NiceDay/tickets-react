export const BUY_TICKET = 'BUY_TICKET';

export function buyTicket(busId) {
  return {
    type: BUY_TICKET,
    payload: {
      busId,
      dateCreated: new Date()
    }
  };
}
