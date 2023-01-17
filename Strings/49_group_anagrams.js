var groupAnagrams = function(strs) {
    let sortedStrs = strs.map(word => word.split('').sort().join(''));
    let hash = {};
    for(let i = 0; i< strs.length; i++){
        if(!hash[sortedStrs[i]]){
            hash[sortedStrs[i]] = [strs[i]];
        }else{
            hash[sortedStrs[i]].push(strs[i])
        }
    }
    return Object.values(hash)
    
};