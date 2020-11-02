function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const stack = [];
    let stackIndex = 0;
    let value;
    let size = 0;
    
    for (let i = 0; i < A.length; i++) {
        if(stack.length === 0) {
            value = A[i];
            stack.push(A[i])
            size++
        } else {
            if (value !== A[i]) {
                stack.pop();
                size--
            } else {
                stack.push(A[i]);
                size++
            }
        }
    }
    
    let candidate;
    let count = 0;
    if (size > 0) {
        candidate = value
    } else {
        candidate = -1
    }
    
    let index;
    
    for(let i = 0; i < A.length; i++) {
        if(A[i] === candidate) {
            count++;
            if(count > Math.floor(A.length / 2)) {
                index = i;
                return index;
            }
        }
    }
    return -1;
}
