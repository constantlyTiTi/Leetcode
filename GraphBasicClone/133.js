/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {

    let resMap = new Map();


    let pushNode = (node) => {
        if (!node) {
            return node;
        }

        if (resMap.has(node.val)) {
            return resMap.get(node.val);
        }

        let cloned = new Node(node.val);
        console.log(node);
        resMap.set(node.val, cloned);

        node.neighbors.forEach(n => {
            cloned.neighbors.push(pushNode(n));
        })


        return cloned;
    }

    return pushNode(node);


};

