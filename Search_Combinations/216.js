/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    
    let res = [];
       
    let pushRes = (i, accum, comb, depth) =>{
        
        let newComb = [...comb];
          
        if(depth == 1){
            return;
        }

        if(comb.length == k && accum == n){
            
            res.push(newComb);
            
            return;
        }
        
        if(comb.length >= k){
            return;
        }
        
        if(accum >= n){
            return;
        }
        if(i > 9){
            return;
        }
        
//         for(let j = i; j <= 9; j++){
            
//             comb.push(i);
//             pushRes(j+1, accum + i, comb);
//             console.log(j, accum, comb);
//             comb.pop(i); 
            
//         }

            comb.push(i);

            pushRes(i, accum + i, comb, depth + 1);

            comb.pop(i); 

            pushRes(i+1, accum , comb, -1);
        
    }
    
    pushRes(1,0,[], -1);
    
    return res;
    
};