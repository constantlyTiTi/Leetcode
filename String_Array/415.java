package String_Array;

class Solution {
    public String addStrings(String num1, String num2) {
        
        int i = num1.length() - 1;
        int j = num2.length() - 1;
        int carry = 0;
        StringBuffer res = new StringBuffer("");
        int modSum = 0;
        
        while(i >= 0 || j >= 0){
            
            if(i >=0 && j >= 0){
                
                modSum = (num1.charAt(i)-'0' + num2.charAt(j)-'0' + carry)%10;
                
                carry = (num1.charAt(i)-'0' + num2.charAt(j)-'0' + carry)/10;
                
                res.insert(0, String.valueOf(modSum));
                i--;
                j--;
            }
            
            else if(i >= 0 && j<0)
            {
                 modSum = (num1.charAt(i)-'0' + carry)%10;
                
                carry = (num1.charAt(i)-'0' + carry)/10;
                
                res.insert(0, String.valueOf(modSum));
                i--;
            }
            else{
                 modSum = (num2.charAt(j)-'0'+ carry)%10;
                
                carry = (num2.charAt(j)-'0'+ carry)/10;
                
                res.insert(0, String.valueOf(modSum));
                j--;                
            }
            
            
        }
        if(carry > 0){
             res.insert(0, String.valueOf(carry));
        }
        
        return res.toString();
        
    }

}