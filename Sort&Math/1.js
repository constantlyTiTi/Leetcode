//first method bad time complexity and memory
var twoSum = function(nums, target) {
    let obj = {};
    let substract = 0;
    nums.forEach((i,index)=>{
       if(!obj[i]){
           obj[i] = [index];
       }
        else{
            obj[i].push(index);
        }
    });
    
    console.log(obj);
    
    for(const [key, value] of Object.entries(obj)){
        substract = target - parseInt(key);
        if(substract == key && value.length > 1){
            return [value[0], value[1]];
        }
        
        if(obj[substract]){
            
            return [value,obj[substract][0]];
        }
        
    }
};//first method end

//second method is better but still high time complexity and memory
var twoSum = function(nums, target) {
    let obj = {};
    let result = [];
    
//     nums.forEach((n,index) =>{
//        if(obj[n] === undefined && obj[target-n] === undefined){
//            obj[n] = index;
//        }
        
//         if(obj[target-n] !== undefined){
//             console.log(obj, n, !obj[n], !obj[target-n], !!obj[2], !obj[2], obj[target-n]);
//             let a = obj[target-n];
//             result.push(a);
//             result.push(index);
//             console.log(result);
//             // return [obj[target-n], index];
//             return result;
//         }
        
       
//     });
    
for(let i = 0; i < nums.length; i++){
    if(obj[nums[i]] === undefined){
         obj[nums[i]] = i;
     }
      
      if(obj[target-nums[i]] !== undefined && obj[target-nums[i]] != i){
          
          let a = obj[target-nums[i]];
          result.push(a);
          result.push(i);
          console.log(result);
          return result;
      }
      
  }
  
    
};// second method done



