// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  if (lists.length === 0) {
    return null;
  }
  const arr = [];
  for (const list of lists) {
    // O(n) to build out array for sorting
    let traveler = list;
    while (traveler !== null) {
      arr.push(traveler.val);
      traveler = traveler.next;
    }
  }
  if (arr.length === 0) {
    return null;
  }
  arr.sort((a, b) => a - b); // O(n * log n)
  const head = {
    val: arr[0],
    next: null
  };
  let traveler = head;
  for (const val of arr.slice(1)) {
    // O(n) to build out final linked list
    traveler.next = {
      val,
      next: null
    };
    traveler = traveler.next;
  }
  return head;
}

module.exports = { mergeKLists };
