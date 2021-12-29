var insertIntoBST = function(root, val) {
    
    let pre = null;
    let next = null;
    
    if(!root){
        return new TreeNode(val, null, null);
    }
    
    let traverse = (node) =>{
        if(node){
            traverse(node.left);
            if(node.val < val){
               if(pre){
                   pre = pre.val > node.val? pre : node;
               }
                else{
                    pre = node;
                }
            }            
            if(node.val > val){
                if(next){
                    next = next.val < node.val? next:node;
                }
                else{
                    next = node;
                }
                
            }
            
            traverse(node.right);
        }
    }
    
    traverse(root);

    if(next){
        if(!next.left){
            next.left = new TreeNode(val, null, null);
            return root;
        }        
    }

    if(pre){
        if(!pre.right){
            pre.right = new TreeNode(val, null, null);
            return root;
        }
            
    }

    return root;
    
};// method 1

//method 2
var insertIntoBST = function(root, val) {
    
    if(!root){
        return new TreeNode(val);
    }
    
    let traverse = (node) =>{
        if(node.val > val){
            if(node.left){
                traverse(node.left);
            }
            else{
                node.left = new TreeNode(val);
            }
        }
        
        if(node.val < val){
            if(node.right){
                traverse(node.right);
            }
            else{
                node.right = new TreeNode(val);
            }
        }
    }
    traverse(root);
     
    return root;
};//method 2 end