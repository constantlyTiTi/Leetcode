/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    let base = {
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],    
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"], 
        "9":["w","x","y","z"],             
    };
    

    let letInterval = {};
    let letters = Array.from(digits);
    let maxResLen = 1;
    
    for(let i = digits.length; i > 0; i-- ){
        letInterval[i] = base[letters[i-1]];

        maxResLen *= letInterval[i].length;
    }
    
    let res = Array.apply("", Array(maxResLen));
    
    let end = maxResLen;
    let repeat = 1;
    for(let i = 1; i<= digits.length; i++){
        let start = 1;
        
        end /= letInterval[i].length;
        if(i!== 1){
            repeat *= letInterval[i-1].length;
        }
        
        for(let k = 1; k<= repeat; k++){
            letInterval[i].forEach((n,index)=>{
            for(let j = start - 1; j < end * (index+1)*k;j++ ){
                if(!res[j]){
                    res[j] = n;
                }
                else{
                    res[j] += n;
                }
               console.log(j,n);
            }
                 
                //console.log(start, end * (index+1)*k);
            start = end * (index+1)*k;
        });
        }

        
    }


    return res;
};//unwork


//backtrack
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    let base = {
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],    
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"], 
        "9":["w","x","y","z"],             
    };
    let res = [];

    let backtrack=(index, s)=>{
        if (s.length == digits.length){
            res.push(s);
            return;
        }
        
        for(let j = 0; j < base[digits[index]].length; j++){
            backtrack(index + 1, s + base[digits[index]][j]);
        }
        
    }
    
 if(digits){
    backtrack(0, "");
}

    return res;
}
