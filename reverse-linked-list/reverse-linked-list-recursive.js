/* 
Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var reverseList = function(head) {
    let newHead;

    function step(node, prevNode) {
        // Since empty list is a null reference
        if (node === null) {
            newHead = node;
            return;
        }

        if (node.next) {
            // standard recursive iteration over linked list
            step(node.next, node);
        } else {
            // at the end of list assign last element to a new head
            newHead = node;
        }

        // on each step point current node to a previous node
        node.next = prevNode;
    }

    // since head become tail, and tail should point to null
    step(head, null);
    
    return newHead;
};
