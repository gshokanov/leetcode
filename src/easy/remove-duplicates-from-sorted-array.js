// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let lastUniqueIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[lastUniqueIndex] === nums[i]) {
      continue;
    }
    lastUniqueIndex++;
    nums[lastUniqueIndex] = nums[i];
  }
  nums.length = nums.length && lastUniqueIndex + 1;
  return nums.length;
}

module.exports = { removeDuplicates };
