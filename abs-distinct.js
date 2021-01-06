function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leftIndex = 0;
    let rightIndex = A.length - 1;

    let count = 0;

    while(leftIndex <= rightIndex) {
        count++;
        const leftValue = Math.abs(A[leftIndex]);
        const rightValue = Math.abs(A[rightIndex]);

        if (leftValue < rightValue) {
            while (rightValue === Math.abs(A[rightIndex])) {
                rightIndex--;
            }
        } else  if (leftValue > rightValue) {
            while (leftValue === Math.abs(A[leftIndex])) {
                leftIndex++;
            }
        } else {
            while (leftValue === Math.abs(A[leftIndex])) {
                leftIndex++;
            }

            while (rightValue === Math.abs(A[rightIndex])) {
                rightIndex--;
            }
        }
    }
    return count;
}
