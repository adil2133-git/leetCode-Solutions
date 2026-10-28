/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let expected = n*(n+1)/2
    let actual = 0

    for(let i=0;i<n;i++){
        actual += nums[i]
    }
    return expected - actual
};