package String_Array;

class Solution {
    public String reverseStr(String s, int k) {
        
        StringBuilder subString = new StringBuilder("");
        
        if(k >= s.length()){
            subString = new StringBuilder(s); 
            s= subString.reverse().toString();
            return s;
        }
        
        
        for(int i = 0; i < s.length(); i += 2* k)
        {
            if(i+k >= s.length()){
                 subString = new StringBuilder(s.substring(i));
                 s = s.substring(0,i) + subString.reverse();
            }
            else{
                 subString = new StringBuilder(s.substring(i,i+k));
                 s = s.substring(0,i) + subString.reverse() + s.substring(i+k);
            }
            
        }
        
        return s;
        
    }
}