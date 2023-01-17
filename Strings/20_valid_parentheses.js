var isValid = function(s) {
    let hashmap = { "(" : ")", "{" : "}", "[" : "]"}
    let stack = [];
    for(let ch of s){
        if(hashmap[ch]){
            // ch is opening brackets
            stack.push(hashmap[ch])
        }else if(stack.length > 0 && stack[stack.length - 1] === ch){
            // ch is closing brackets and top stack matches
            stack.pop()
        }else{
            // ch is closing bracket and top stack doesn't match
            return false;
        }
    }
    return stack.length === 0;
};