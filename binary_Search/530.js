//method 1 
var getMinimumDifference = function(root) {
    
    let minValue = Number.MAX_VALUE;
    let nodeList = [root.val];
    
    let traverse = (node) =>{
        if(node){
            if(node.left){
               nodeList.push(node.left.val);
            }
            traverse(node.left);
            
            if(node.right){
               nodeList.push(node.right.val); 
            }
            
            traverse(node.right);
        }
    }
    traverse(root);
    for(let i = 0; i < nodeList.length -1; i++){
        for(let j = i+1; j < nodeList.length; j++){
            minValue = Math.min(minValue, Math.abs(nodeList[i] - nodeList[j]));
        }
    }
    
    return minValue;
    
};//method 1 end

//method 2 BST in order property
var getMinimumDifference = function(root) {
    
    let minValue = Number.MAX_VALUE;
    let preNode = null;
    
    let traverse = (node) =>{
        if(!node){
            return;
        }
        traverse(node.left);
        
        if(preNode){
            minValue = Math.min(minValue, node.val - preNode.val);
        }
        preNode = node;

        traverse(node.right);
    }
    traverse(root);
    
    return minValue;
    
};//method 2 end