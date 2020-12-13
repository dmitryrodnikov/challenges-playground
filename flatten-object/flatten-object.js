/*
Input:
{
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 5
    }
  },
  g: 8
}

Output:
{
  a:1,
  b.c: 2,
  b.d.e: 3,
  b.d.f: 5,
  g: 8,
}
*/

function flatten(obj) {
  const result = {};

  function step(acc, innerObj) {
    Object.keys(innerObj).forEach(key => {
      if (typeof innerObj[key] === 'number') {
        result[acc ? acc + '.' + key : key] = innerObj[key];
      } else {
        step(acc ? acc + '.' + key : key, innerObj[key]);
      }
    });
  }

  step(undefined, obj);

  return result;
}