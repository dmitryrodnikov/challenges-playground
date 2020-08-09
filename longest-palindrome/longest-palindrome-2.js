// 'a,d,s,a,s,g' => 'asdsa' / 'asgsa' => 5;
// 'a,b,a,b,' => 'abba' => 4;

const longestPalindrome = (s) => {
    let count = 0;
    const dict = {};
    
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        dict[letter] = dict[letter] ? dict[letter] + 1 : 1;
        
        // If reach 2 occurrences of letter, than they can be on both sides of palindrome
        if (dict[letter] === 2) {
            // add them to count
            count += 2;
            // and reset in dict
            dict[letter] = 0;
        }
    }
    
    // Here all letters with even occurrences will be in count
    // Only single letters will be left
    // We can only place 1 not paired letter at the middle of palindrome
    // So if there are single letters (count < length), then add one, if no return count;
    return s.length > count ? count + 1 : count;
};
