/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 /*
   num[i] + num[j] + num[k] = 0;
   num[j] + num[k] = 0 - num[i];
    sum = num[j] + num[k];
    target = 0 - num[i];
     left = i + 1;
     right = num.length - 1;

    case 1: sum > target
            right--
    case 2: sum < target
            left++
    case 3: sum === target

  
  */
    var threeSum = function(nums) {
        let result = [];
        nums.sort((a,b) => a - b);
    
        for(let i = 0; i< nums.length; i++){
            // check to ignore duplicate i values
             if(nums[i] !== nums[i-1]){
                let left = i + 1;
                let right = nums.length - 1;
                let target = 0 - nums[i];
                while(left < right){
                    let sum = nums[left] + nums[right];
                    if(sum > target){
                        right--;
                    }else if(sum < target){
                        left++;
                    }else{
                        // when sum === target, then push to result
                        result.push([nums[i], nums[left], nums[right]]);
                        // ignore duplicate values
                        while(nums[left] === nums[left + 1]) left++;
                        while(nums[right] === nums[right - 1]) right--;
                        left++;
                        right--;
                    }
                }
    
             }
        }
        return result;
    };