function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const peaksIndex = []
    let size = 0;
    for(let i = 1; i < A.length - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaksIndex[size] = i;
            size++;
        }
    }
    let max = 0;

    for(let i = 1; i <= A.length; i++) {
        if (A.length % i === 0) {
            const blocks = A.length / i;
            let currentBlock = 0;

            for (let j = 0; j < peaksIndex.length; j++) {
                if ((currentBlock * blocks <= peaksIndex[j]) && (peaksIndex[j] < (currentBlock + 1) * blocks)) {
                    currentBlock++;
                }
            }
            if (currentBlock == i) {
                max = currentBlock
            }
        }
    }
    return max;
}
