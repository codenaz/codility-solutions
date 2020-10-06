function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0;
    let numberOfPrecedingZeros = 0;
    
    for (i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            numberOfPrecedingZeros += 1;
        }
        
        if (A[i] === 1) {
            result += numberOfPrecedingZeros
            
            if(result > 1000000000) {
                return -1;
            }
        }
    }
    
    return result;
}
