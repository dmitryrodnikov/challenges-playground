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

// Unnecessary recursion, watch constant time solution
var deleteNode = function(node) {
    function step(currentNode, previousNode) {
        previousNode.val = currentNode.val;

        if (currentNode.next) {
            step(currentNode.next, currentNode);
        } else {
            previousNode.next = null;
        }
    }

    step(node, node);
};
