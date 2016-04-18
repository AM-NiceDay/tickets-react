import _ from 'lodash';

export function isPhoneNumber(value) {
  return _.isNumber(Number(value)) && !_.isNaN(Number(value)) && String(value).length === 9;
}

export function isEmail(value) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}

export function isName(value) {
  return /^[а-яА-ЯЁё]+$/.test(value);
}
