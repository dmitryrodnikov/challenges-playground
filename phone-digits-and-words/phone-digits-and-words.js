// Input: 1. arr of words 2. phone number
// Output: array of words those representation as digit consist inside phone number

// Visual:
// 1 [___]  | 2 [abc] | 3 [def]
// 4 [ghi]  | 5 [jkl] | 6 [mno]
// 7 [pqrs] | 8 [tuv] | 9 [wxyz]

// Example
// Input: '3662277', ['foo', 'bar', 'baz', 'foobar', 'emo', 'cap', 'car', 'cat']
// Output: ["foo", "bar", "foobar", "emo", "cap", "car"]

const dict = {
  a: 2,
  b: 2,
  c: 2,
  d: 3,
  e: 3,
  f: 3,
  g: 4,
  h: 4,
  i: 4,
  j: 5,
  k: 5,
  l: 5,
  m: 6,
  n: 6,
  o: 6,
  p: 7,
  q: 7,
  r: 7,
  s: 7,
  t: 8,
  u: 8,
  v: 8,
  w: 9,
  x: 9,
  y: 9,
  z: 9,
};

function convertWord(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(dict[str[i]]);
  }
  return result.join("");
}

function isSubsequence(phone, word) {
  let result = false;

  for (let i = 0; i < phone.length; i++) {
    for (let k = 0; k < word.length; k++) {
      const phoneChar = phone[i];
      const wordChar = word[k];

      if (wordChar === phoneChar) {
        // if it is the end of the word => we found subsequence
        if (k === word.length - 1) {
          result = true;
          break;
        } else {
          // go further if it is not the end of word
          i++;
        }
      } else {
        // reset to next char after start
        i -= k;
        k = word.length;
      }
    }
  }
  return result;
}

function filterWords(phone, words) {
  return words.filter((word) => {
    const wordInDigit = convertWord(word);
    return isSubsequence(phone, wordInDigit);
  });
}
