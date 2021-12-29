var searchBST = function(root, val) {
    let res = null;        
    let traverse = (node) =>{
            
        if(node){
                traverse(node.left);
                if(node.val == val){
                    return node;
                }
                
                traverse(node.right);
            }
            return null;
        }
        
        
        return traverse(root);
        
};