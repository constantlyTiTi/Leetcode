var selfDividingNumbers = function(left, right) {
    let res = [];
    let mid = 0; 
    let temp = left;
    
    for(; left <= right; left ++){
        if(left % 10 ==0){
            continue;
        }
        
        temp = left;
        
        while(temp != 0 ){
             mid = left%(temp % 10) ;
            console.log(mid, temp, left);
            if(mid != 0 ){
              break;  
            }
            
            temp = temp/10 | 0;
        }

        
        if(mid == 0 ){
            res.push(left);
        }
    }
    
    return res;
};