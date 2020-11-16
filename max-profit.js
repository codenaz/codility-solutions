function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxProfitAtEnd = 0;
    let maxProfit = 0
    
    for (let i = 1; i < A.length; i++) {
        maxProfitAtEnd = Math.max(0, maxProfitAtEnd) + (A[i] - A[i - 1]);
        maxProfit = Math.max(maxProfit, maxProfitAtEnd);
    }
    
    return maxProfit
}
