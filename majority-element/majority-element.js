/**
 * @param {number[]} nums
 * @return {number}
 */

// Hash table solution
// Time Complexity - O(n)
// Space Complexity - O(n)
    
// From description we know that majority element is exist, and majority element is [n/2].
// That means the number of unique elements can be n/2 (other half)
// We store every unique element in a hash table, so they are in memory
// Get rid of constant 1/2 and we get the space complexity of O(n)
var majorityElement = function(nums) {
    const dict = {};
    let result;

    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] = dict[nums[i]] ? dict[nums[i]] + 1 : 1;
        if (dict[nums[i]] > nums.length / 2) {
            result = nums[i];
            break;
        }
    }

    return result;
};
