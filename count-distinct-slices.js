function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum = 0;
    let left = 0;
    let right = 0;
    let checked = {};

    while (right < A.length) {
        while (right < A.length && !checked[A[right]]) {
            sum += (right - left) + 1;
            checked[A[right]] = true;
            right++
            if (sum >= 1000000000) {
                return 1000000000;
            }
        }
        while (A[left] !== A[right]) {
            checked[A[left]] = false;
            left++
        }
        
        checked[A[left]] = false;
        left++
    }

    return sum;
}

//https://app.codility.com/demo/results/trainingCE56DF-YRR/
