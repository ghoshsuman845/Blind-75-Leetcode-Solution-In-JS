/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let start = 0;
  let frequencyMap = {};
  let maxFreq = 0;
  let longestSubstringLength = 0;
  for (let end = 0; end < s.length; end++) {
    // if element not present in map, then initialize it with 0
    if (!frequencyMap[s[end]]) {
      frequencyMap[s[end]] = 0;
    }
    frequencyMap[s[end]]++;

    maxFreq = Math.max(maxFreq, frequencyMap[s[end]]);
    let isValid = end - start + 1 - maxFreq <= k;
    if (!isValid) {
      // decrease frequency of the start element in frequency map
      frequencyMap[s[start]]--;
      start++;
    }

    longestSubstringLength = end - start + 1;
  }
  return longestSubstringLength;
};
