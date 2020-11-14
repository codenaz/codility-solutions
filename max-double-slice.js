
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const maxSumEnd = A.map(i => 0);
    const maxSumStart = [...maxSumEnd];
    
    for(let i = 1; i < A.length - 1; i++) {
        maxSumEnd[i] = Math.max(0, maxSumEnd[i - 1] + A[i]);
    }
    
    for(let i = A.length - 2; i > 0; i--) {
        maxSumStart[i] = Math.max(0, maxSumStart[i + 1] + A[i]);
    }
    
    let maxSlice = 0;
    
    for(let i = 1; i < A.length -1; i++) {
        maxSlice = Math.max(maxSlice, maxSumEnd[i - 1] + maxSumStart[i + 1])
    }
    
    return maxSlice
    
}
