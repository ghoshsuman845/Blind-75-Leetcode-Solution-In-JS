/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
  
    let firstRowHasZero = false;
    let firstColHasZero = false;
  
    // Check if first row has zero
    for (let j = 0; j < n; j++) {
      if (matrix[0][j] === 0) {
        firstRowHasZero = true;
        break;
      }
    }
  
    // Check if first column has zero
    for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 0) {
        firstColHasZero = true;
        break;
      }
    }
  
    // Mark first row and first column based on rest of the matrix
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  
    // Set zeroes based on marks in first row and first column
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  
    // Set zeroes for first row and first column if needed
    if (firstRowHasZero) {
      for (let j = 0; j < n; j++) {
        matrix[0][j] = 0;
      }
    }
  
    if (firstColHasZero) {
      for (let i = 0; i < m; i++) {
        matrix[i][0] = 0;
      }
    }
  };
  