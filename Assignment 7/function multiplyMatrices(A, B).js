function multiplyMatrices(A, B) {
   
    const rowsA = A.length;
    const colsA = A[0].length;
    const rowsB = B.length;
    const colsB = B[0].length;

    if (colsA !== rowsB) {
        throw new Error("Invalid matrix dimensions for multiplication.");
    }

    const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

    
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}


const matrixA = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrixB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

try {
    const product = multiplyMatrices(matrixA, matrixB);
    console.log("The product of the matrices is:");
    console.log(product);
} catch (error) {
    console.error(error.message);
}