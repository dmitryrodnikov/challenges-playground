/**
 * @param {number} n
 * @return {boolean}
 */
const squares = {
    '0': 0,
    '1': 1,
    '2': 4,
    '3': 9,
    '4': 16,
    '5': 25,
    '6': 36,
    '7': 49,
    '8': 64,
    '9': 81,
};

var isHappy = function(n) {
    const dict = new Set();

    while (n !== 1) {
        if (dict.has(n)) {
            return false;
        }

        dict.add(n);
        const str = String(n);
        let sum = 0;

        for (let i = 0; i < str.length; i++) {
            sum += squares[str[i]];
        }

        n = sum;
    }

    return true;
};
