// All open symbols should have corresponding closing symbol
// isValidSyntax('[[))') => false
// isValidSyntax('[{ jjj }]') => true
// isValidSyntax('hello world (((x)))') => true
// isValidSyntax('({[)}]') => false
// isValidSyntax('(') => false

function isValidSyntax(str) {
    const dict = {
        '(': ')',
        '[': ']',
        '{': '}',
        ')': false,
        '}': false,
        ']': false,
    };

    const stack = [];
    let result = true;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (dict[char] !== undefined && dict[char]) {
            stack.push(char);
        } else if (dict[char] !== undefined) {
            const removedChar = stack.pop();
            if (dict[removedChar] !== char) {
                result = false;
                break;
            }
        }
    }

    return result ? stack.length === 0 : result;
}
