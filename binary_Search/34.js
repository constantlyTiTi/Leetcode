/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  
    let start = 0;
    let end = nums.length -1 ;
    let mid = 0;
    
            
    if(nums[0] > target || nums[end] < target || nums.length == 0){
            return [-1,-1];
    }
    
    while(start < end){
        mid = (start+end)/2|0;
        
        if(start + 1 == end && nums[start] != target && nums[end] != target){
            return [-1, -1];
        }
        
        if(start + 1 == end && nums[end] == target && nums[start] != target){
            mid = end;
            break;
        }
        
        if(nums[mid] < target){
            start = mid;
        }
        
        if(nums[mid] > target){
            end = mid;
        }
        if(nums[mid] == target){
            break;
        }
    }


    let findLeft = ()=>{

        let leftMid =0;
        
        while(start < mid){
            leftMid = (start+mid)/2|0;
            
            if(leftMid == start && nums[start] != target){
                start++;
                break;
            }
            
            if(leftMid == start && nums[start] == target){
                break;
            }            
            
            if(nums[leftMid] != target){
                start = leftMid;
            }
            
            if(nums[leftMid] == target){
                mid = leftMid;
            }
        }
    }
    
    let findRight = ()=>{

        let rightMid = 0;
        
        while(mid < end){
            rightMid = (mid+end)/2|0;
            
            if(rightMid == mid && nums[end] == target){
                mid = end;
                break;
            }
            if(rightMid == mid && nums[end] != target){
                end = mid;
                break;
            }
            
            if(nums[rightMid] != target){
                end = rightMid;
            }
            
            if(nums[rightMid] == target){
                mid = rightMid;
            }
        }
    }    
    
    findLeft();
    findRight();
    
    return[start, end];
    
};