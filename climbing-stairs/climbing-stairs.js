/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = {};

    function step(a) {
        if (memo[a]) {
            return memo[a];
        }

        if (a < 0) {
            return 0;
        }

        if (a === 0) {
            return 1;
        }

        const sum = step(a-1) + step(a-2);
        memo[a] = sum;

        return sum;
    }

    return step(n);
};
