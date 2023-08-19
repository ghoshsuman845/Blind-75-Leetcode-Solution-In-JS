/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.replace(/[^a-z0-9]/gi, "")
    let start = 0;
    let end = s.length - 1;
    while(start < end){
        if(s[start].toLowerCase() != s[end].toLowerCase()) return false;
        start++;
        end--;
    }
    return true;
    
};