/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let currMaxProd = nums[0];
    let currMinProd = nums[0];
    let result = nums[0];
    for(let i = 1; i< nums.length; i++){
        let maxProd = Math.max(currMaxProd * nums[i], nums[i], currMinProd * nums[i])
        let minProd = Math.min(currMaxProd * nums[i], nums[i], currMinProd * nums[i])

        currMaxProd = Math.max(maxProd, minProd)
        currMinProd = Math.min(maxProd, minProd)

        result = Math.max(result, currMaxProd)
    }
    return result;
    
};