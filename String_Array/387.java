package String_Array;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

//method 1
class Solution {
    public int firstUniqChar(String s) {
        
        Map<Character, Integer> letters = new LinkedHashMap<Character, Integer>();
        Map<Character, Integer> index = new HashMap<Character, Integer>();
        int i =0;
        
        for(Character c : s.toCharArray()){
            if(letters.containsKey(c)){
                letters.put(c, letters.get(c) + 1);
            }
            else{
                letters.put(c, 1);
                index.put(c, i);
            }
            i++;
        }
        
        for(Map.Entry<Character, Integer> entry : letters.entrySet() ){
            if(entry.getValue()==1){
                return index.get(entry.getKey());
            }
        }
        
        return -1;
        
    }
}//method 1 end

