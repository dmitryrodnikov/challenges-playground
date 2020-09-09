/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const aCode = 'A'.charCodeAt(0);
    const base = 'Z'.charCodeAt(0) - aCode + 1;
    let result = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const charAsNumber = s[i].charCodeAt(0) - aCode + 1;
        const multiplier = Math.pow(base, s.length - 1 - i);
        result += multiplier * charAsNumber;
    }

    return result;
};
