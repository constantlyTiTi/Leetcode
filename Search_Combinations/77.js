/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    
    let res = [];
    
    var pushRes = (i, comb) =>{
        
        let newComb = [...comb];
            if(newComb.length === k){
                res.push(newComb);
                return;
            } 
            
            if(newComb.length > k){
                return;
            }

        
        for(let j = i; j <= n; j++){
            comb.push(j);
           
            pushRes(j + 1, comb);
            comb.pop(j);
        }
    }
    
    pushRes(1,[]);
    
    return res;
};

