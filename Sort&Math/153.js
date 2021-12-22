var findMin = function(nums) {
    let start = 0;
    let end = nums.length;
    while(start != end && start < end){
        
        if(nums[start] > nums[start+1]){
            return nums[start + 1];
        }
        
        if(nums[end] < nums[end -1]){
            return nums[end];
        }
        
        start++;
        end --;
    }
    return nums[0];
};