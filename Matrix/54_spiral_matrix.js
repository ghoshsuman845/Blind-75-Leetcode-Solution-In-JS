var spiralOrder = function (matrix) {
    const result = [];
    let top = 0,
      bottom = matrix.length - 1;
    let left = 0,
      right = matrix[0].length - 1;
  
    while (top <= bottom && left <= right) {
      // Traverse top row from left to right
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
  
      // Traverse right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
  
      // Check if top has crossed bottom or left has crossed right
      if (top <= bottom && left <= right) {
        // Traverse bottom row from right to left
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--;
  
        // Traverse left column from bottom to top
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return result;
  };
  