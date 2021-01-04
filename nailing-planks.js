function solution(A, B, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    let begin = 1;
    let end = C.length;
    let nailedPlanks = -1;
    while (begin <= end) {
        const mid = Math.floor((end + begin)/2);

        const prefixSum = (new Array(1 + (2 * C.length))).fill(0);
        for (let i = 0; i < mid; i++) {
            prefixSum[C[i]] += 1;
        }


        for (let i = 1; i <= 2 * C.length; i++) {
            prefixSum[i] += prefixSum[i - 1];
        }


        
        let nailed = true;

        for (let i = 0; i < A.length; i++) {
            if (prefixSum[A[i] - 1] === prefixSum[B[i]]) {
                nailed = false;
                break;
            }
        }

        if (nailed) {
            nailedPlanks = mid;
            end = mid - 1;
        } else {
            begin = mid + 1
        }
    }

    return nailedPlanks;
}
