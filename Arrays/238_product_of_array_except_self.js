/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var productExceptSelf = function(nums) {
    let leftProd = [];
    let rightProd = [];
    let solution = [];

    // populate leftProd
    for(let i=0; i<nums.length; i++){
        // push 1 in 0 index
        if(leftProd.length === 0){
            leftProd.push(1);
        }else{
            leftProd.push((leftProd[i-1]*nums[i-1]))
        }
    }
    // populate rightProd
    for(let i=nums.length-1; i>-1;i--){
        //push 1 at index 0
        if(rightProd.length === 0){
            rightProd.push(1)
        }else{
            rightProd.unshift((rightProd[0]*nums[i+1]))
        }
    }

    // populate solution
    for(let i = 0; i<nums.length;i++){
       solution.push((leftProd[i]*rightProd[i]))
    }

    return solution;
    
};