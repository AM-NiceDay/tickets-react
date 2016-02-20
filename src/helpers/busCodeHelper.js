import _ from 'lodash';

export function formatBusCode(cityId, busId) {
  const numberOfZeros = 3 - busId.toString().length;
  const zeros = _.repeat('0', numberOfZeros);

  return `${cityId}${zeros}${busId}`;
}
