/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time & O(1) memory solution
var missingNumber = function(nums) {
    const sum = nums.reduce((acc, i) => acc + i, 0);
    const n = nums.length + 1;
    const expectedSum = (n * (n - 1)) / 2;
    return expectedSum - sum;
};
