function spiralOrderTraversal(matrix){
    const result=[]
    
    let top=0, bottom=matrix.length-1;
    let left=0,right=matrix[0].length-1;

    while(top<=bottom && left<=right){
        for(let i=left;i<=right;i++) result.push(matrix[top][i])
        top++

        for(let i=top;i<=bottom;i++) result.push(matrix[i][right])
        right--;

        if(top<=bottom){
            for(i=right;i>=left;i--) result.push(matrix[bottom][i])
            bottom--;
        }

        if(left<=right){
            for(i=bottom;i>=top;i--) result.push(matrix[i][left])
            left++
        }
    }
    return result;
}

console.log(spiralOrderTraversal([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]))
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
// Explanation: The spiral order traversal starts from the top-left corner of the matrix and moves in a spiral pattern towards the center. The output is a single array containing the elements in spiral order.
// The time complexity of this function is O(n*m), where n is the number of rows and m is the number of columns in the matrix. This is because we are iterating through each element of the matrix once.
// The space complexity is O(1) if we do not consider the output array, as we are using a constant amount of extra space for the result array. However, if we include the output array, the space complexity is O(n*m) because we are storing all elements of the matrix in the result array.
// The space complexity is O(n*m) because we are storing all elements of the matrix in the result array.
// The time complexity is O(n*m) because we are iterating through each element of the matrix once.