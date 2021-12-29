//failed
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
               
    let visited = {};    
    let res = [];
    
    if(nums.length == 1){
        return [[...nums]];
    }       
        // repeat permute process for each element
        for(let i = 0; i< nums.length ; i++){

            if(visited[nums[0]]){
                let deleted = nums.shift();
                nums.push(deleted);
                continue;
            }            
            //only permute when the item is not duplicate
            if(!visited[nums[0]]){
                visited[nums[0]] = nums[0];                
                let deleted = nums.shift();                
                for(let p of permuteUnique(nums)){
                    p.push(deleted);
                    res.push(p);
                }                
                nums.push(deleted);                
            }
        }       
    return res;
}// failed


