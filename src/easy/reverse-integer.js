// https://leetcode.com/problems/reverse-integer/

/**
 * Reverses an integer. Returns 0 if resulting number will overflow int32
 * @param {number} num
 * @return {number}
 */
function reverse(num) {
  // Get upper boundary for signed int32
  const boundary = (~(1 << 31)).toString(10).split('');
  const isNegative = num < 0;
  let numbers = num.toString(10).split('');
  if (isNegative) {
    numbers = numbers.slice(1);
  }
  const reversed = numbers.reverse();
  const offset = boundary.length - reversed.length;
  if (offset < 0) {
    return 0;
  }
  if (offset === 0) {
    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] < boundary[i]) {
        break;
      }
      if (reversed[i] > boundary[i]) {
        return 0;
      }
    }
  }
  let result = parseInt(reversed.join(''));
  if (isNegative) {
    // Two's complement
    result = ~result + 1;
  }
  return result;
}

module.exports = {
  reverse
};
