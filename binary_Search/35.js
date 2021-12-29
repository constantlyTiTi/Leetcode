var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;
    
    if(nums[start] >= target){
        return 0;
    }
    
    if(nums[end] < target){
        return end + 1;
    }
    
    for(; start <= end ; ){
        mid = (start+end)/2|0
        if(nums[mid] < target){
            start = mid;
        }
        
        if(nums[mid] > target){
            end = mid;
        }
        
        if(nums[mid] == target){
            return mid;
        }
        
        if(end - start == 1){
            return end;
        }
    }
    
};