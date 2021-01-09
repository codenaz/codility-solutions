function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length < 1) {
        return A.length;
    }
    
    let count = 1;
    let end = B[0];
    for(let i = 1; i < A.length; i++) {
        if(end < A[i]) {
            count++
            end = B[i];
        }
    }
    return count;
}
