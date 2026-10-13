/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let minSum = prices[0] + prices[1]

    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            let sum = prices[i] + prices[j] 
            
            if(sum < minSum){
                minSum = sum
            }
        }
    }
    
    if(minSum <= money){
        return money - minSum
    }else{
        return money
    }
};