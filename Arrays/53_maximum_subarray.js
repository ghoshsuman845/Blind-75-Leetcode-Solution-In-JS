/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = nums[0];
    let maxSum = nums[0];
    if(nums.length === 1) return nums[0];
    for(let i = 1; i<nums.length; i++){
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
    
};