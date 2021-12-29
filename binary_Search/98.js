/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    
    let preNode = "";
    let res = true;
    
    let traverse = (node) =>{
        
        if(!node){return}
        
        traverse(node.left);
        
        if(preNode){
            if(preNode.val >= node.val){
                res = false;
            }
        }
        
        preNode = node;
        
        traverse(node.right);
        
    }
    
    traverse(root);
    
    return res;
    
};