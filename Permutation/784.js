var letterCasePermutation = function(s) {
 
    let sArray = [...s];
    
    
    let permute = (arr) =>{
        
                let res = [];

        if(arr.length == 1){
            if(isNaN(arr[0])){
                return [arr[0].toLowerCase(),arr[0].toUpperCase()];
            }
            else{
                return [arr[0]];
            }
            
        }
        
        let deleted = arr.shift();
    
        for(let p of letterCasePermutation(arr)){
 
            if(isNaN(deleted)){
                res.push(deleted.toLowerCase() + p);
                res.push(deleted.toUpperCase() + p);
            }
            else{
                res.push(deleted+ p);
            }    
        }
    
    return res;
        
        
    }
    
    return permute(sArray);
    
};