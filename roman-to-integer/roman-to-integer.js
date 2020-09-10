/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const dict = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const num1 = dict[s[i]];
        const num2 = dict[s[i+1]];

        if (num2 > num1) {
            result += num2 - num1;
            i++;
        } else {
            result += num1;
        }
    }

    return result;
};
