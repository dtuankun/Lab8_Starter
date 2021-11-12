// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
const { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor } =
  functions;

// TODO - Part 2
//#region  //*=========== isPhoneNumber ===========
describe('isPhoneNumber function should work correctly', () => {
  test('isPhoneNumber("abcdefghijkl") with alphabet should return false', () => {
    expect(isPhoneNumber('abcdefghijkl')).toBe(false);
  });

  test('isPhoneNumber("1231234") without dash should return false', () => {
    expect(isPhoneNumber('1231234')).toBe(false);
  });

  test('isPhoneNumber("123-1234") with dash should return true', () => {
    expect(isPhoneNumber('123-1234')).toBe(true);
  });

  test('isPhoneNumber("123-123-1234") with 2 dash should return true', () => {
    expect(isPhoneNumber('123-123-1234')).toBe(true);
  });
});
//#endregion  //*======== isPhoneNumber ===========

//#region  //*=========== isEmail ===========
describe('isEmail function should work correctly', () => {
  test('isEmail("josh(at)yahoo.com") without @ should return false', () => {
    expect(isEmail('josh(at)yahoo.com')).toBe(false);
  });

  test('isEmail("josh@yahoo") withoutdomain should return false', () => {
    expect(isEmail('josh@yahoo')).toBe(false);
  });

  test('isEmail("josh@yahoo.com") with @ and domain should return true', () => {
    expect(isEmail('josh@yahoo.com')).toBe(true);
  });

  test('isEmail("john_doe@gmail.com") with correct format and _ should return true', () => {
    expect(isEmail('john_doe@gmail.com')).toBe(true);
  });
});
//#endregion  //*======== isEmail ===========

//#region  //*=========== isStrongPassword ===========
// The password's first character must be a letter,
// it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters,
// numbers and the underscore may be used
describe('isStrongPassword function should work correctly', () => {
  test('isStrongPassword("1asdfasdf") with first character as number should return false', () => {
    expect(isStrongPassword('1asdfasdf')).toBe(false);
  });

  test('isStrongPassword("abc") with less than 4 characters should return false', () => {
    expect(isStrongPassword('abc')).toBe(false);
  });

  test('isStrongPassword("abcdefghijkl") with 12 characters should return true', () => {
    expect(isStrongPassword('abcdefghijkl')).toBe(true);
  });

  test('isStrongPassword("abc123__43") with numbers and underscore should return true', () => {
    expect(isStrongPassword('abc123__43')).toBe(true);
  });
});
//#endregion  //*======== isStrongPassword ===========

//#region  //*=========== isDate ===========
// This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
describe('isDate function should work correctly', () => {
  test('isDate("11112021") without / should return false', () => {
    expect(isDate('11112021')).toBe(false);
  });

  test('isDate("031/20/2020") with XX 3 digits long should return false', () => {
    expect(isDate('031/20/2020')).toBe(false);
  });

  test('isDate("1/11/2021") with XX 1 digit should return true', () => {
    expect(isDate('1/11/2021')).toBe(true);
  });

  test('isDate("11/11/2021") with XX 2 digits should return true', () => {
    expect(isDate('11/11/2021')).toBe(true);
  });
});
//#endregion  //*======== isDate ===========

//#region  //*=========== isHexColor ===========
// Matches valid 3 or 6 character hex codes used for HTML or CSS.
describe('isHexColor function should work correctly', () => {
  test('isHexColor("1234") with 4 characters should return false', () => {
    expect(isHexColor('1234')).toBe(false);
  });

  test('isHexColor("rgb(1, 2, 3)") with rgb syntax should return false', () => {
    expect(isHexColor('rgb(1, 2, 3)')).toBe(false);
  });

  test('isHexColor("#123456") with 6 characters should return true', () => {
    expect(isHexColor('#123456')).toBe(true);
  });

  test('isHexColor("123") with 3 characters and without # should return true', () => {
    expect(isHexColor('123')).toBe(true);
  });
});
//#endregion  //*======== isHexColor ===========
