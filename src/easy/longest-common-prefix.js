// https://leetcode.com/problems/longest-common-prefix/

/**
 * Find longest common prefix among input strings
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  const prefix = [];
  if (strs.length === 0) {
    return '';
  }
  for (let i = 0; i < strs[0].length; i++) {
    let value;
    for (const str of strs) {
      if (value && str[i] !== value) {
        return prefix.join('');
      }
      value = str[i];
    }
    prefix.push(value);
  }
  return prefix.join('');
}
module.exports = {
  longestCommonPrefix
};
