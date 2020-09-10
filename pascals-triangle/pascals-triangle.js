/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];

    for (let i = 1; i <= numRows; i++) {
        const arr = [];

        if (i === 1) {
            arr.push(1);
        } else {
            for (let k = 0; k < i; k++) {
                const previousRow = result[i-2];
                const topLeft = previousRow[k - 1] || 0;
                const topRight = previousRow[k] || 0;
                arr.push(topLeft + topRight);
            }
        }

        result.push(arr);
    }

    return result;
};
