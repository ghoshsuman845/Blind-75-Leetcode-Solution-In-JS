/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // required to find maximum profit and minimum buy price
    let maxProfit = 0;
    let minBuyPrice = prices[0];
    /* 1. we start from the first index, as we can sell from the first day
       2. we check if the previous value(buy price) is minimum. Because only then we can make max     profit

    */
    for(let sellDay = 1; sellDay < prices.length; sellDay++){
        let sellPrice = prices[sellDay];
        let profit = sellPrice - minBuyPrice;

        // min buy price
        minBuyPrice = Math.min(minBuyPrice, prices[sellDay])

        // max profit
        maxProfit = Math.max(profit, maxProfit);
      
    }
    return maxProfit;
    
};