/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums){
    let freq = {}

    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        if(freq[num]){
            freq[num]++
        }else{
            freq[num] = 1
        }
    }

    for(let key in freq){
        if(freq[key] === 1){
            return Number(key)
        }
    }
}