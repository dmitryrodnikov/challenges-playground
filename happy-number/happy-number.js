/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const dict = {};

    while (n !== 1) {
        if (dict[n]) {
            break;
        }
        dict[n] = true;
        const str = String(n);
        let sum = 0;

        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i]) ** 2;
        }

        n = sum;
    }

    return n === 1;
};
