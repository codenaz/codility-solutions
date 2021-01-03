function solution(K, M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum = 0;
    let max = 0;
    for (let i = 0; i < A.length; i++) {
        max = max > A[i] ? max : A[i];
        sum += A[i];
    }

    let result = sum;

    let begin = max;
    let end = sum;

    while (begin <= end) {
        const mid = Math.floor((begin + end)/2);

        if (check(mid, K, A)) {
            end = mid - 1;
            result = mid;
        } else {
            begin = mid + 1;
        }
    }

    return result
}

function check(num, blocks, A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];

        if (sum > num) {
            sum = A[i];
            blocks--;
            
            if (blocks === 0) {
                return false;
            }
        }
    }
    return true;
}
