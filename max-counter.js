function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const result = [];
    
    const maxDict = {
        maxValue: 0,
        maxIndex: 1
    };
    
    let changed = false;
    
    for(let i = 0; i < N; i++) {
        result[i] = 0;
    }
    
    for(let i = 0; i < A.length; i++) {
        if(A[i] <= N ) {
            result[A[i] - 1] = result[A[i] - 1] + 1;
            
            if(result[A[i] - 1] > maxDict.maxValue) {
                maxDict.maxValue = result[A[i] - 1];
                maxDict.maxIndex = A[i];
            }
            changed = true;
        } else {
            if (changed) {
                fillArray(result, maxDict.maxValue);
                changed = false
            }
        }
        
        
    }

    return result;
    
}

function fillArray(A, value) {
    for(let i = 0; i < A.length; i++) {
        A[i] = value;
    }
}
