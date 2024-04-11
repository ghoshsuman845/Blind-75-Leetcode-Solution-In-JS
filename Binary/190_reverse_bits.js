/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1; // Left shift result by 1 to make space for the next bit
        result |= n & 1; // Set the least significant bit of result to the least significant bit of n
        n >>= 1; // Right shift n by 1 to move to the next bit
    }
    return result >>> 0; // Unsigned right shift to handle negative numbers
};
