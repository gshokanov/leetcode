// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let count = 0;
  const visited = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const isNewIsland = recursiveMark(i, j, grid, visited);
      if (isNewIsland) {
        count++;
      }
    }
  }
  return count;
}

function recursiveMark(i, j, grid, visited) {
  const position = i * grid[i].length + j;
  if (grid[i][j] === '0' || visited.has(position)) {
    return false;
  }
  visited.add(position);
  if (i > 0) {
    recursiveMark(i - 1, j, grid, visited);
  }
  if (i < grid.length - 1) {
    recursiveMark(i + 1, j, grid, visited);
  }
  if (j > 0) {
    recursiveMark(i, j - 1, grid, visited);
  }
  if (j < grid[i].length - 1) {
    recursiveMark(i, j + 1, grid, visited);
  }
  return true;
}

module.exports = { numIslands };
