var preorder = function(root) {
    let result =[];
    checknode(root,result);
    return result;
};

var checknode = (node, result) =>{
    if(node){
        result.push(node.val);
        node.children.forEach(n=>{
       checknode(n,result); 
    });
    }
    
}