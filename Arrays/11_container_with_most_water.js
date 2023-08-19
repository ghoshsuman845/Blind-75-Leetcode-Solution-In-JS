/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right){
        let lh = height[left];
        let rh = height[right];
        maxWater = ( right - left) * Math.min(lh, rh);
        if(lh < rh) left++;
        else right--;

        max = Math.max(maxWater, max);
    }
    return max;
    
};