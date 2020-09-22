function solution(A) {
    let max;
    let minMissing;
    dictA = {0: true};
    A.push(0);
    // write your code in JavaScript (Node.js 8.9.4)
    for(let i = 0; i <= A.length; i++) {
        if (A[i] < 0) {
            A[i] = 0;
        }
        if (max === undefined  || max < A[i]) {
            max = A[i];
        }
        dictA[A[i]] = true;
    }
    
    for (let i = 0; i <= A.length; i++) {
        if (A[i] !== max && !dictA[A[i] + 1]) {
            if(minMissing === undefined || minMissing > A[i]) {
                minMissing = A[i] + 1;
            }
        }
    }
    
    if (!minMissing) {
        return max + 1
    } else {
        return minMissing;
    }
}
