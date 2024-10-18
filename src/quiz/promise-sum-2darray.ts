const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumRow = (row: number[]): Promise<number> => {
    return new Promise((resolve, reject) => {
        let sum = 0;
        for (let i = 0; i < row.length; i++) {
            console.log(`Adding ${row[i]} to sum`);
            sum += row[i];
        }
        resolve(sum);
    });
}

const sum2DArrayFast = (arr: number[][]): Promise<number> => {
    return new Promise((resolve, reject) => {
        console.log("Sum called ... ");
        if (arr.length === 0) {
            reject("Cannot sum an empty array");
        }
        let sum = 0;
        const promises = arr.map((row) => sumRow(row));
        Promise.all(promises)
            .then((sums) => {
                for (let i = 0; i < sums.length; i++) {
                    console.log(`Adding ${sums[i]} to sum`);
                    sum += sums[i];
                }
                resolve(sum);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

sum2DArrayFast(array2D_1)
    .then((sumPromise1) => {
        console.log("sumPromise1:", sumPromise1);
    })
    .catch((error) => {
        console.log("Error:", error);
    });