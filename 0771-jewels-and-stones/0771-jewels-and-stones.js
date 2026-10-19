/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    let jew = jewels.split("")
    let ston = stones.split("")

    for(let i=0;i<jew.length;i++){
        for(let j=0;j<ston.length;j++){
            if(jew[i] === ston[j]){
                count++
            }
        }
    }

    return count
};