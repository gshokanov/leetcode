// https://leetcode.com/problems/combination-sum/submissions/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const result = [];
  // Stack keeps current solution path. Iteration over possible solutions is done in a DFS manner.
  const stack = [];
  let sum = 0;
  let lastVisited = -1;
  do {
    if (sum < target) {
      const lastValue = stack[stack.length - 1] || 0;
      // Choose only from the right hand side of the candidates array to avoid duplicate sets
      const selected = Math.max(lastVisited + 1, lastValue);
      if (selected === candidates.length) {
        lastVisited = stack.pop();
        sum -= candidates[lastVisited];
      } else {
        stack.push(selected);
        sum += candidates[selected];
        lastVisited = -1;
      }
      continue;
    }
    if (sum === target) {
      result.push(stack.map(i => candidates[i]));
    }
    lastVisited = stack.pop();
    sum -= candidates[lastVisited];
  } while (stack.length > 0 || lastVisited < candidates.length - 1);
  return result;
}

module.exports = { combinationSum };
