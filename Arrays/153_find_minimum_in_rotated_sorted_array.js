/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low=0;
    let high=nums.length-1;
       
       while(low<high){
           let mid= Math.floor(low + (high-low)/2);
           console.log("mid", mid)
           if(nums[mid]<nums[high]){
               high=mid;
           }
           else{
               low= mid+1;
           }
           
       }
       return nums[high];
};