/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for(let i = 0; i< nums.length;i++){
        let value = nums[i];
        let complementPair = target - value;
        // if complementpair is present in map
        if(map[complementPair] !== undefined){
            return [map[complementPair], i]
        }else{
            map[value] = i;
        }
    }
    
};