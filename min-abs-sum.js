function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = 0;
    let sum = 0;
    let count = {};

    for(let i = 0; i < A.length; i++) {
        A[i] = Math.abs(A[i]);
        max = Math.max(max, A[i]);
        sum += A[i];
        count[A[i]] = count[A[i]] ? count[A[i]] + 1 : 1;
    }

    const dp = new Array(sum).fill(-1);

    dp[0] = 0;

    for(let i = 1; i <= max; i++) {
        if (count[i]) {
            for (let j = 0; j < sum; j++) {
                if(dp[j] >= 0) {
                    dp[j] = count[i];
                } else {
                    if (j >= i && dp[j - i] > 0) {
                        dp[j] = dp[j - i] - 1;
                    } 
                }
            }
        }
    }

    let result = sum;

    for(let i = 0; i <= Math.floor(sum / 2); i++) {
        if (dp[i] >= 0) {
            result = Math.min(result, sum - (2 * i))
        }
    }

    return result;


}
