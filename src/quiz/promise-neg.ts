const array2D_3 = [
  [1, 2, 3],
  [4, 5, -6],
  [7, 8, -9],
];

const hasNegative = (row: number[]): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    const negativeIndex = row.findIndex(num => num < 0);
    if (negativeIndex !== -1) {
      resolve(row);
    } else {
      reject('No negative number found in this row');
    }
  });
}

const hasNegativeIn2DArray = (arr: number[][]): Promise<number[]> => {
  console.log("Checking for negative numbers ... ");
  const promises = arr.map(row => hasNegative(row));
  
  return Promise.any(promises)
    .then(rowWithNegative => {
      console.log("Found a row with a negative number:", rowWithNegative);
      return rowWithNegative;
    })
    .catch(error => {
      console.log("No negative numbers found in any row");
      return [];
    });
}

// Example usage
hasNegativeIn2DArray(array2D_3)
  .then(result => {
    if (result.length > 0) {
      console.log("Row with negative number:", result);
    } else {
      console.log("No row with negative number found");
    }
  })
  .catch(error => console.error("Error:", error));