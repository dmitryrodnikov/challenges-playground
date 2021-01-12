// O(n) solution
const maxSubArray = function(nums) {
    let acc = 0;
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];

        if (curr + acc > 0) {
            // If positive sum, than it can contribute to max
            acc += curr;
            // Save max
            if (acc > max) {
                max = acc;
            }
        } else {
            // If sum of sequence less than 0, then it can only decrease sum, so we reset accumulator
            acc = 0;
            // Special case if all numbers are negative (or zero).
            // Sum of negative is even more negative, so we can simply take biggest one
            if (curr > max) {
                max = curr;
            }
        }
    }

    return max;
};
