/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    
    let res = [[]];
    
    nums.sort((a,b)=>{return a-b;});
    
    let pushRes = (i, comb, depth) =>{
        
        let newComb = [...comb];
        
        if(comb.length === depth){
            res.push(newComb);
            return; 
        }
        
        for(let j = i; j < nums.length; j++){

              comb.push(nums[j]);  
            
            pushRes(j+1, comb, depth);
            comb.pop(nums[j]);            
        }
    }
    
    for(let j = 1; j < nums.length; j++){
         pushRes(0,[], j);
    }

    res.push(nums);
    
    return res;
    
};