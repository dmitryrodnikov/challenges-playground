// Straightforward solution:
// Write letters to dict with number of occurrences as value
// If occurrences is even number, than we can add them to total count (because they can be on both sides of palindrome)
// If occurrences is odd, then the longest one should be in center
// All other odd numbers should be added to count but -1, so they will be even;

const isEven = (n) => {
  return n % 2 === 0;
};

const longestPalindrome = (s) => {
  let count = 0;
  const dict = {};
  const odds = [];
  
  for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      dict[letter] = dict[letter] ? dict[letter] + 1 : 1;
  }
  
  for (const key in dict) {
      if (dict[key] !== 0) {
          if (isEven(dict[key])) {
              count += dict[key];
          } else {
              odds.push(dict[key]);
          }
      }
  }
  
  let maxOddTuple = [0, 0];
  odds.forEach((i, index) => {
      if (i > maxOddTuple[0]) {
          maxOddTuple = [i, index];
      }
  });

  count += maxOddTuple[0];
  odds.splice(maxOddTuple[1], 1);

  odds.forEach(i => {
      count += i - 1;
  });
  
  return count;
};
