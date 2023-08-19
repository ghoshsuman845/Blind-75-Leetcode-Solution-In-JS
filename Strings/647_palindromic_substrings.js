/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i += 0.5) {
    let left = Math.floor(i);
    let right = Math.ceil(i);
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        result++;
      } else {
        break;
      }
      left--;
      right++;
    }
  }
  return result;
};
