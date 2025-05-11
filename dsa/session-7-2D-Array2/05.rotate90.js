function rotate90(matrix){

    for(let i=0;i<matrix.length;i++){
        for(let j=i;j<matrix.length;j++){
            let temp=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp
        }
    }
    console.log('tranposed matrix',matrix)
    for(let i=0;i<matrix.length;i++){
        matrix[i].reverse()
    }

    console.log(matrix)
    
}

rotate90([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]);
// Output: [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4]
// ]

// Explanation: The rotate90 function rotates a square matrix by 90 degrees clockwise. It first transposes the matrix by swapping elements across the diagonal, and then reverses each row to achieve the final rotated matrix.
// The time complexity of this function is O(n^2), where n is the number of rows (or columns) in the square matrix. This is because we are iterating through each element of the matrix twice: once for transposing and once for reversing.
// The space complexity is O(1) because we are modifying the matrix in place and not using any additional data structures that grow with the input size.

//Task for Practice: Diagonal Traversal