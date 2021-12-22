//method 1 output limit Exceeded
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    
    let nodeMap = new Map();
    
    let cloneNode= (node) =>{
        if(!node){
            return node;
        }
        
        if(nodeMap.has(node)){
            return nodeMap.get(node);
        }
        
        let cloned = new Node(node.val);
        nodeMap.set(node, cloned);
        
        if(node.next){
            cloned.next = cloneNode(node.next);
            cloned.random = nodeMap.get(node.random);
        }
        
        if(!node.next){
            cloned.random = nodeMap.get(node.random);
        }
        
        return cloned;
    }
    
    return cloneNode(head);
    
    
};