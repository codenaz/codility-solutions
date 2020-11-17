function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maximumSliceSum = A[0];
    let maximumEndSum = A[0];
    
    for (let i = 0; i < A.length - 1; i++) {
        maximumEndSum = Math.max(0, maximumEndSum) + A[i + 1];
        maximumSliceSum = Math.max(maximumEndSum, maximumSliceSum);
    }
    
    return maximumSliceSum;
}
