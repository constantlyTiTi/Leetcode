var search = function(nums, target) {
    
    let start = 0; 
    let end = nums.length -1;
    let mid = 0;
    
    if(nums.length == 0){
        return -1;
    }
    
    if(nums.length == 1 && nums[0] != target){
        return -1;
    }
    
    while(start <= end){
        
        mid = (start + end)/2 |0;
        
        if(start + 1 == end && nums[start] != target && nums[end] != target){
            return -1;
        }
        
        if(start + 1 == end && nums[end] == target && nums[start] != target){
             return end;
        }
        
        if(nums[mid] < target){
            start = mid;
        }
        
        if(nums[mid] > target){
            end = mid;
        }
        
        if(nums[mid] == target){
            return mid;
        }
        
    }
    
    
};