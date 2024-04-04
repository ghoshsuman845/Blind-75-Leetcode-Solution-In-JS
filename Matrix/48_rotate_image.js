/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length;
  
    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]; // Swap elements
      }
    }
  
    // Step 2: Reverse each row of the transposed matrix
    for (let i = 0; i < n; i++) {
      let left = 0,
        right = n - 1;
      while (left < right) {
        [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]]; // Swap elements
        left++;
        right--;
      }
    }
  };
  