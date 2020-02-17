// https://leetcode.com/problems/roman-to-integer/

const numerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const compositeNumerals = {
  I: ['V', 'X'],
  X: ['L', 'C'],
  C: ['D', 'M']
};

/**
 * Converts romant number to integer
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  let result = 0;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const symbol = s[i];
    if (!compositeNumerals[symbol]) {
      result += numerals[symbol];
      continue;
    }
    const nextSymbol = i + 1 < len ? s[i + 1] : '';
    if (!nextSymbol || !compositeNumerals[symbol].includes(nextSymbol)) {
      result += numerals[symbol];
      continue;
    }
    result += numerals[nextSymbol] - numerals[symbol];
    i++;
  }
  return result;
}

module.exports = {
  romanToInt
};
