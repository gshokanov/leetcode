/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} num
 * @return {boolean}
 */
function isPalindrome(num) {
    if (num < 0) {
      return false;
    }
    const numbers = num.toString(10).split('');
    const middle = Math.trunc(numbers.length / 2);
    for (let i = 0; i < middle; i++) {
      if (numbers[i] !== numbers[numbers.length - 1 - i]) {
        return false;
      }
    }
    return true;
}