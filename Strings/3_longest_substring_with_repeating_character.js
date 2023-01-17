var lengthOfLongestSubstring = function(s) {

    let max = 0;
    let begin = 0;
    let set = new Set();
    for(let end = 0; end < s.length; end++){
        // if end element already present in set
        while(set.has(s[end])){
            // delete all elements till repeated element
            set.delete(s[begin]);
            begin++;
        }
        set.add(s[end]);
        max = Math.max(max, set.size);

    }
    return max;
    
};