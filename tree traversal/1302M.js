// first method out of time but good to display all level node value
var deepestLeavesSum = function(root) {
    let result =[[]];
    checknode(root, 0, result);   
    return result[result.length - 1].reduce(add, 0);
};

var checknode = (node, level, result) =>{
    if(node){       
        if(result.length-1 < level){
            let innerarray = [];
            innerarray.push(node.val);
            result.push(innerarray);
        }
        else{            
            result[level].push(node.val);
            
        }
        console.log(level, result);
        checknode(node.left, level+1, result);
        checknode(node.right, level + 1, result);
    }
    
}

var add = (r, i) =>{
    return r + i;
}// first method end

//second method is to reduce time consuming
var deepestLeavesSum = function(root) {
    //let result = [0,0];
    let result = {};
    checknode(root, 0, result);  
    console.log(result);
    return result[Object.keys(result).length -1];
};

var checknode = (node, level, result) =>{
    if(node){
        
        if(!result[level]){ //{"0",1} level=1  
            result[level] = node.val;
        }
        else{
            result[level] += node.val;
        }

        checknode(node.left, level+1, result);
       
        checknode(node.right, level + 1, result);
    
    }    
    
}

//HashMap<integer, integer>