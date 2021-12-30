package String_Array;

class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        
        if(nums1.length == m){
            return ;
        }
        
        if(nums1.length == n){
            for(int i = 0; i < nums1.length; i++){
                nums1[i] = nums2[i];
            }
            return ;
        }
        
        int[] nums3 = new int[nums1.length];
        
        int j1 = 0;
        int j2 = 0;
        
        for(int i = 0; i<nums1.length; i++){

            if(j1<m && j2 < n){
                if(nums1[j1]>= nums2[j2]){
                    nums3[i] = nums2[j2];
                    j2++;

                }
                else {
                    
                    nums3[i] = nums1[j1];
                    j1++;
                }
            }
            else if(j1 >= m && j2 < n){
                nums3[i] = nums2[j2];
                    j2++;                
            }
            else{
                    nums3[i] = nums1[j1];
                    j1++;                
            }
            
        }
        
        for(int i = 0; i< nums1.length; i++){
            nums1[i] = nums3[i];
        }

    }
}