/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let binary = n.toString(2);
    let count = 0;

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            count++;
        }
    }

    return count;
};
