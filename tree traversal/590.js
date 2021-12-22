var postorder = function(root) {
    let result = [];
    checknode(root,result);
    return result;
};

//
var checknode = (node, result) =>{
    if(node){
        node.children.forEach(n=>{
            checknode(n, result);
        });
        result.push(node.val);
    }
}