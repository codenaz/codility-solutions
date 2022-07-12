// You are given integers K, M and a non-empty array A consisting of N integers. Every element of the array is not greater than M.

// You should divide this array into K blocks of consecutive elements. The size of the block is any integer between 0 and N. Every element of the array should belong to some block.

// The sum of the block from X to Y equals A[X] + A[X + 1] + ... + A[Y]. The sum of empty block equals 0.

// The large sum is the maximal sum of any block.

// For example, you are given integers K = 3, M = 5 and array A such that:

//   A[0] = 2
//   A[1] = 1
//   A[2] = 5
//   A[3] = 1
//   A[4] = 2
//   A[5] = 2
//   A[6] = 2
// The array can be divided, for example, into the following blocks:

// [2, 1, 5, 1, 2, 2, 2], [], [] with a large sum of 15;
// [2], [1, 5, 1, 2], [2, 2] with a large sum of 9;
// [2, 1, 5], [], [1, 2, 2, 2] with a large sum of 8;
// [2, 1], [5, 1], [2, 2, 2] with a large sum of 6.
// The goal is to minimize the large sum. In the above example, 6 is the minimal large sum.

// Write a function:

// def solution(K, M, A)

// that, given integers K, M and a non-empty array A consisting of N integers, returns the minimal large sum.

// For example, given K = 3, M = 5 and array A such that:

//   A[0] = 2
//   A[1] = 1
//   A[2] = 5
//   A[3] = 1
//   A[4] = 2
//   A[5] = 2
//   A[6] = 2
// the function should return 6, as explained above.

// Write an efficient algorithm for the following assumptions:

// N and K are integers within the range [1..100,000];
// M is an integer within the range [0..10,000];
// each element of array A is an integer within the range [0..M].

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
