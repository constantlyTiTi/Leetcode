//first slow
var removeDuplicates = function(nums) {
    let result = new Set();
    nums.forEach(n=>{
        result.add(n);
    });

    let resultNum = 0;
    
    result.forEach(r=>{
        nums[resultNum] = r;
        resultNum++;
        console.log(r);
    })
    
    return resultNum;
};//first end

//method 2
var removeDuplicates = function(nums) {
    let newIndex = 0;
   nums.forEach((n,index) =>{
       if(index == 0){
           newIndex++;
       }
       else{
           if(nums[index] != nums[index -1]){
               nums[newIndex] = nums[index];
               newIndex++;
           }
       }
   });
    
    return newIndex;
};//end method 2
