class TimeMap {

    Map<String, Map<Integer, String>> MapTimeStamp = new HashMap<String, Map<Integer, String>>();
    
    public TimeMap() {
        
    }
    
    public void set(String key, String value, int timestamp) {
        if(!MapTimeStamp.containsKey(key)){
            MapTimeStamp.put(key, new HashMap(){{put(timestamp, value);}});
        }
        else{
            MapTimeStamp.get(key).put(timestamp, value);
        }
        
    }
    
    public String get(String key, int timestamp) {
        
        if(!MapTimeStamp.containsKey(key)){
            return "";
        }
        
        if(MapTimeStamp.get(key).containsKey(timestamp)){
            return MapTimeStamp.get(key).get(timestamp);
        }
        
        ArrayList<Integer> keyList = new ArrayList<>(MapTimeStamp.get(key).keySet());
        
        int start = 0; 
        int end = keyList.size()-1;
        int mid = 0;
        
        System.out.println( MapTimeStamp.get(key));
        
        if(keyList.get(end) < timestamp){
            return MapTimeStamp.get(key).get(keyList.get(end));
        }
        
        if(keyList.get(start) > timestamp){
             return "";
        }
        
        while(start < end){
            mid = (start+end)/2;
            if(start + 1 == end && keyList.get(start) != timestamp && keyList.get(end) != timestamp){
                return MapTimeStamp.get(key).get(keyList.get(start));
            }
            
            if(keyList.get(mid) < timestamp){
                start = mid;
            }
            if(keyList.get(mid) > timestamp){
                end = mid;
            }
            
            if(keyList.get(mid) == timestamp){
                return MapTimeStamp.get(key).get(timestamp); 
            }
        }
        
        
        return "";
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.set(key,value,timestamp);
 * String param_2 = obj.get(key,timestamp);
 */