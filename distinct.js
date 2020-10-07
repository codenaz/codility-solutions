function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const dictA = {};
    let numberOfDistinct = 0;
    
    for(let i = 0; i < A.length; i++) {
        if (!dictA[A[i]]) {
            dictA[A[i]] = true;
            numberOfDistinct++
        }
    }
    
    return numberOfDistinct;
}
