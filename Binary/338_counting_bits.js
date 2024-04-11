/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        // To count the number of set bits in i, we use the formula:
        // dp[i] = dp[i & (i - 1)] + 1
        // Explanation: (i & (i - 1)) removes the least significant bit of i,
        // which is a power of 2. So, dp[i] = dp[i - 1] + 1
        dp[i] = dp[i & (i - 1)] + 1;
    }
    
    return dp;
};
