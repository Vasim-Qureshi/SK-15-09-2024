function wavePrint(matrix) {
    const result = []
    for (let col = 0; col < matrix[0].length; col++) {
        if (col % 2 === 0) {
            for(row=0;row<matrix.length;row++){
                result.push(matrix[row][col])
            }
        }else{
            for(row=matrix.length-1;row>=0;row--){
                result.push(matrix[row][col])
            }
        }
    }
    return result
}

console.log(wavePrint([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]))
// Output: [1, 5, 9, 13, 14, 10, 6, 2, 3, 7, 11, 15, 16, 12, 8, 4]
// Explanation: The wave print starts from the first column and goes downwards, then moves to the next column and goes upwards, and so on. The output is a single array containing the elements in wave order.
// The time complexity of this function is O(n*m), where n is the number of rows and m is the number of columns in the matrix. This is because we are iterating through each element of the matrix once.
// The space complexity is O(1) if we do not consider the output array, as we are using a constant amount of extra space for the result array. However, if we include the output array, the space complexity is O(n*m) because we are storing all elements of the matrix in the result array.
