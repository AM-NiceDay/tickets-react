export const CHECK_BUS = 'CHECK_BUS';

const buses = {
  '100': {
    checked: true,
    exist: true,
    route: 21
  },
  '200': {
    checked: true,
    exist: false
  }
};

export function checkBus(busId) {
  return {
    type: CHECK_BUS,
    payload: {
      id: busId,
      checked: buses[busId].checked,
      exist: buses[busId].exist,
      route: buses[busId].route
    }
  };
}
