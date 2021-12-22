//binary search
class Solution {
    public int findMin(int[] nums) {
        
        int start = 0; 

        int end = nums.length -1;
        
        while(start < end ){ 
            
            if(nums[start] < nums[end]){
                return nums[start];
            }
            
            if(start == (start+end)/2){
                return nums[start + 1];
            }
            
            if(nums[start] < nums[(start+end)/2]){
                
                start = (start+end)/2;
            }
            else{
                end = (start+end)/2 ;
            }
        
        }
        
        return nums[start];
    }
}