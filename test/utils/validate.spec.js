import { expect } from 'chai';
import { isEmail, isName, isPhoneNumber } from '../../src/utils/validate';

describe('validate utils', () => {
  describe('#isEmail()', () => {
    it('returns true if passed parameter is email', () => {
      expect(isEmail('test@example.com')).to.equal(true);
    });

    it('returns false if passed parameter isn\'t email', () => {
      expect(isEmail('test@example')).to.equal(false);
    });
  });

  describe('#isName()', () => {
    it('returns true if passed parameter is cyrillic', () => {
      expect(isName('Петр')).to.equal(true);
    });

    it('returns false if passed parameter isn\'t cyrillic', () => {
      expect(isName('Peter')).to.equal(false);
    });
  });

  describe('#isPhoneNumber()', () => {
    it('returns true if passed parameter is 9 digit number', () => {
      expect(isPhoneNumber(123456789)).to.equal(true);
    });

    it('returns true if passed parameter is string representation of 9 digit number', () => {
      expect(isPhoneNumber('123456789')).to.equal(true);
    });

    it('returns false if passed parameter isn\'t 9 digit', () => {
      expect(isPhoneNumber(1234)).to.equal(false);
    });

    it('returns false if passed parameter isn\'t number', () => {
      expect(isPhoneNumber('12345678!')).to.equal(false);
    });
  });
});
