/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let count = {};
    if( s.length !== t.length) return false;
    for(let i = 0; i< s.length; i++){
        // add elements if not already present in map
        if(!count[s[i]]) count[s[i]] = 0;
        if(!count[t[i]]) count[t[i]] = 0;
        count[s[i]]++;
        count[t[i]]--;
    }
    for(let ch in count){
        if(count[ch] !== 0) return false;
    }
    return true;
    
};