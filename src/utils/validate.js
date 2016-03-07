import _ from 'lodash';

export default function (value, validator) {
  return validator(value);
}

export function isPhoneNumber(value) {
  return _.isNumber(Number(value)) && value.length === 9;
}

export function isEmail(value) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}

export function isName(value) {
  return /^[а-яА-ЯЁё]+$/.test(value);
}
