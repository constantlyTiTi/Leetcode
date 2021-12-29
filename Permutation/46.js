var permute = function(nums) {
    
    let res = [];
    
    if(nums.length == 1){
        return [[...nums]];  
    }
    
    for(let i = 0; i < nums.length; i++){
        let deleted = nums.shift();
        
        for(let p of permute(nums)){
            p.push(deleted);
            res.push(p);
        }
   
        nums.push(deleted);
    }
return res;  
    
};

//     let pushRes = (ele, comb, numsNew) =>{
//         let combRef = [...comb];
//         console.log(numsNew);
        
//         if(combRef.length == nums.length){
//             res.push(combRef);
//             return;
//         }
        
//         comb.push(ele);
        
//         for(let i = 0; i<numsNew.length; i++){
//             let deleted = numsNew.shift();

//             pushRes(deleted, comb, numsNew);
            
//             numsNew.concat(deleted);
//         }


//     } 
    
//     for(let i = 0; i < nums.length; i++){
//         let removed = nums.splice(i,1);
//         let newNums = [...nums];
//         pushRes(removed,  [], newNums);
//         nums.splice(i,0,removed);
//     }