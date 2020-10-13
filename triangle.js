function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const sortedA = A.sort((a, b) => a - b);
    
    for(let i = 0; i < (sortedA.length - 2); i++) {
        if (sortedA[i] + sortedA[i + 1] > sortedA[i + 2]) {
            return 1;
        }
    }
    return 0;
}
