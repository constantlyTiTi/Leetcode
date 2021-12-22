/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    
    candidates.sort(asc); 
    
    let candMap = new Map(); 
    let candSet = new Set();
    candidates.map(i=>{
        if(!candMap[i]){
            candMap[i] = 1;
        }
        else{
            candMap[i] ++;
        }
        
        candSet.add(i);
    });
    
    if(candidates.length == 1 && candidates[0] != target){
        return [];
    }
    
    if(candidates.length == 0){
        return [];
    }
    
    let candSetArray = Array.from(candSet);
    
    let res = [];
    
    let pushRes = (i, total, comb, depth) =>{
        
        let newRes = [...comb];
        
        if(i == candSetArray.length ){
            return;
        }
        
        if(total > target){
            return;
        }
        
        
        if(depth == candMap[candSetArray[i]]){
            return;
        }
        
        if(total == target){

            res.push(newRes);
            return res;
        }
        
        comb.push(candSetArray[i]);

       
        pushRes(i, total + candSetArray[i], comb, depth + 1);
        comb.pop(candSetArray[i]);
        pushRes(i + 1, total , comb, -1);
        
        
    }
    
    pushRes(0,0,[], -1);
    
    return res;
    
};

var asc = (a, b) =>{
    return a-b;
}


