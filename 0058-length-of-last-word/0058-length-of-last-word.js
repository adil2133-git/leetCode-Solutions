/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ")
    let lastWord = arr[arr.length-1]
    let result = lastWord.length
    return result
};