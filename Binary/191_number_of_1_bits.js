/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n != 0) {
        count += n & 1; // Add the least significant bit to count
        n >>>= 1; // Right shift n by 1 bit
    }
    return count;
};
