/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    
    let res = [[]];
    let resSet = new Set();
    
    nums.sort((a,b)=>{return a-b;});
    
    let pushRes = (i, comb, depth) =>{
        
        let newComb = [...comb];
        
        if(comb.length === depth){
            if(!resSet.has(newComb.toString())){
               res.push(newComb); 
                resSet.add(newComb.toString());
            }
            
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