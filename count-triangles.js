function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sortedA = A.sort((a,b) => (a - b));
    let result = 0;
    for (let P = 0; P <= A.length - 3; P++) {
        let Q = P + 1;
        let R = P + 2;

        while(R < A.length) {
            if (sortedA[Q] + sortedA[P] > sortedA[R]) {
                result += R - Q;
                R++
            } else {
                Q++;
                if (Q === R) {
                    R++
                }
            }
        }
        
    }

    return result;
    
}
// https://app.codility.com/demo/results/trainingJSJY8K-CA2/
