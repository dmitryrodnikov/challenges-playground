/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    function step(arr) {
        const node = {};

        if (arr.length === 1) {
            node.val = arr[0];
            node.left = null;
            node.right = null;
            return node;
        }

        if (arr.length === 2) {
            node.val = arr[1];
            node.left = step([arr[0]]);
            node.right = null;
            return node;
        }

        const mid = arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2);

        node.val = arr[mid];
        node.left = step(arr.slice(0, mid));
        node.right = step(arr.slice(mid + 1, arr.length));
        return node;
    }

    return step(nums);
};
