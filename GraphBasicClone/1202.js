/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {

    let swapArray = [];
    let s1 = "";
    let s2 = "";

    let replaceString = (index, val, scopy) => {
        return scopy.substring(0, index) + val + scopy.substring(index + 1);
    }

    //comb record the combination of pairs index
    let checkNode = (indexP, comb) => {

        let combCopy = [...comb];

        if (combCopy.length == pairs.length + 1) {
            let scopy = s;
            combCopy.forEach(c => {
                s1 = scopy[c[0]];
                s2 = scopy[c[1]];
                scopy = replaceString(c[0], s2, scopy);
                scopy = replaceString(c[1], s1, scopy);
            });

            swapArray.push(scopy);
            return;
        }
        else {
            comb.push(indexP);
        }

        pairs.forEach((n, index) => {
            checkNode(index, comb);
            comb.pop(n);
        });
        
    }

checkNode(0, []);
return swapArray.sort()[0];
}