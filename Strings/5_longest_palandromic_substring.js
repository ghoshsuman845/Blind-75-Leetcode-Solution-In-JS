/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let low, high;
    let maxLength = 0;
    if(s.length < 2) return s;
    for(let i = 0; i< s.length; i+=0.5){
        low = Math.floor(i);
        high = Math.ceil(i);
        while(low >= 0 && high < s.length && s[low] === s[high]){
            low--;
            high++;
        }
        let length = high - low - 1;
        if(length > maxLength){
            maxLength = length;
            start = low + 1;
        }

    }
    return s.substring(start, start + maxLength)
    
};