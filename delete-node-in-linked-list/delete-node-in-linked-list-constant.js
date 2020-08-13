/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// Constant time solution
var deleteNode = function(node) {
    // copy next node value
    node.val = node.next.val;
    // point to the node that after next
    node.next = node.next.next;
    // skipped node will be garbage collected
};
