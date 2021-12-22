/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// method 1
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    
    let res = [];
    let resSet = new Set();
    
    if(candidates.length == 0){
        return [];
    }
    
    let sortCand = candidates.sort(asc);
    
    let largestIndex = sortCand.findIndex(i=>i > target);
    
    if(!largestIndex || largestIndex == -1){
        largestIndex = sortCand.length;
    }
    
    let comb = [];
    
    let pushRes = (i, comb, accum) =>{
        let newRes = [...comb];
        if(accum == target){
            res.push(newRes);
            return res;
        }
        
        if(i==largestIndex){
            return;
        }
        if(accum > target){
            return;
        }
        
        accum += sortCand[i];        
        
        comb.push(sortCand[i]);

        
        pushRes(i, comb, accum);
        
        comb.pop(sortCand[i]);
        accum -= sortCand[i];
        
        pushRes(i+1, comb, accum);
        
    }
    
    
    pushRes(0, comb, 0);
    
    
    
    return res;
    
};

var asc = (a, b) =>{
    return a-b;
}
//method1 end



 var combinationSum = function(candidates, target) {
    
    let res = [];
    let resSet = new Set();
    
    if(candidates.length == 0){
        return res;
    }
    
    let candiMap = {};
    candidates.map(i=>{
        candiMap[i] = i;
    });
    
    let sortCand = candidates.sort(asc);
    
    let largestIndex = sortCand.findIndex(i=>i > target);
    
    if(!largestIndex || largestIndex == -1){
        largestIndex = sortCand.length;
    }
    
    let start = 0;
    
    for(let i = start; i< largestIndex; i++){
        pushRes(i, target/sortCand[i], "",0,target,resSet, candiMap, sortCand )
        
    }
    
    console.log(resSet);
    resSet.forEach(r => {
        res.push(r.split(","));
    })
    return res;
    
};

var asc = (a, b) =>{
    return a-b;
}

var pushRes = (currentIndex, loop, subString, accumulate, target, resSet, candiMap, sortCand) =>{
    
    if(loop > 1){
       pushRes(currentIndex,loop -1, subString+ sortCand[currentIndex].toString(), accumulate + sortCand[currentIndex], target, resSet, candiMap, sortCand); 
    }

    // console.log(subString, target - accumulate);
    if(candiMap[target - accumulate]){
        subString += candiMap[target - accumulate].toString();
        resSet.add([...subString].sort(asc).toString());
        
    }
    
    let newlargestIndex = sortCand.findIndex(i=>i > parseInt(subString[subString.length-1]));
    
    for(let i = currentIndex + 1; i< newlargestIndex; i++){
        console.log(subString, sortCand[i]);
        if(parseInt(subString[subString.length-1])/sortCand[i] == 1){
            return;
        }
        pushRes(sortCand[i], parseInt(subString[subString.length-1])/sortCand[i], subString,0, parseInt(subString[subString.length-1]),resSet, candiMap, sortCand );
        
    }

}