// https://leetcode.com/problems/string-to-integer-atoi/
const SPACE_CHAR = ' ';
const PLUS_SIGN = '+';
const MINUS_SIGN = '-';
const PADDING = '0';
const INT_MAX = ~(1 << 31);
const INT_MAX_ARR = INT_MAX.toString(10).split('');
const INT_MIN = 1 << 31;
const INT_MIN_ARR = INT_MIN.toString(10)
  .split('')
  .slice(1); // Minus operator is omitted
const DIGITS_SET = new Set(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => el.toString(10))
);
const OPERATORS_SET = new Set([PLUS_SIGN, MINUS_SIGN]);
const ParsingState = {
  Whitespace: 0,
  Operator: 1,
  Padding: 2,
  Digit: 3
};

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  const digits = [];
  let operator = '';
  let state = ParsingState.Whitespace;
  for (const char of str) {
    if (state === ParsingState.Whitespace && char === SPACE_CHAR) {
      continue;
    }
    if (OPERATORS_SET.has(char)) {
      if (state === ParsingState.Whitespace) {
        state = ParsingState.Operator;
        operator = char;
        continue;
      }
      // Operator can only be encountered once and should follow whitespace
      break;
    }
    if (state !== ParsingState.Digit && char === PADDING) {
      if (state !== ParsingState.Padding) {
        state = ParsingState.Padding;
      }
      continue;
    }
    if (DIGITS_SET.has(char)) {
      if (state !== ParsingState.Digit) {
        state = ParsingState.Digit;
      }
      digits.push(char);
    } else {
      break;
    }
  }
  if (digits.length === 0) {
    return 0;
  }
  const rangeEnd = operator === MINUS_SIGN ? INT_MIN_ARR : INT_MAX_ARR;
  if (digits.length > rangeEnd.length) {
    return operator === MINUS_SIGN ? INT_MIN : INT_MAX;
  }
  if (digits.length === rangeEnd.length) {
    for (let i = 0; i < digits.length; i++) {
      const digit = parseInt(digits[i]);
      const rangeDigit = parseInt(rangeEnd[i]);
      if (digit > rangeDigit) {
        return operator === MINUS_SIGN ? INT_MIN : INT_MAX;
      }
      if (digit < rangeDigit) {
        break;
      }
    }
  }
  return parseInt(`${operator}${digits.join('')}`);
}

module.exports = { myAtoi };
