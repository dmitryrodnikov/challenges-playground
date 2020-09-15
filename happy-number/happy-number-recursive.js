/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const dict = {};

    function step(input) {
        if (input === 1) {
            return true;
        }

        const str = String(input);

        if (dict[str]) {
            return false;
        }

        dict[str] = true;

        let sum = 0;

        for (let i = 0; i < str.length; i++) {
            const digit = Number(str[i]);
            sum += digit * digit;
        }

        return step(sum);
    }

    return step(n);
};
