/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
   let count = 0
   let newn = n

   while(newn > 1){
    if(newn % 2===0){
        let fun = newn/2
        newn = fun
        count += fun
    }else{
        let fun = (newn-1)/2
        newn = fun + 1
        count += fun
    }
   }
   return count 
};