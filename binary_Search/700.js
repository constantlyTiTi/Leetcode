var searchBST = function(root, val) {
    let res = null;        
    let traverse = (node) =>{
            
        if(node){
                traverse(node.left);
                if(node.val == val){
                    res = node;
                    return;
                }
                
                traverse(node.right);
            }
        }
        
        traverse(root);
        return res;
        
        
};