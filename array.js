function getSecondLargest(nums) {
    // Complete the function
    nums.sort();
    var found;
    var b = 1;
    var max = Math.max.apply(null, nums);
    for (let i = 0; i < nums.length; i++) {
         
        if (max == (nums[nums.length - b])) { 
            b++;    
        }
    }
    found = nums[nums.length - b];
    return found;
        }