/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for(let i = 0; i<nums.length; i++){
        if(map[nums[i]] === undefined){
            map[nums[i]] = i;
        }else{
            return true;
        }
    }
    return false;
};