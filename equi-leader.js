function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    let equi = 0;
    const stack = [];
    let stackSize = 0;
    let value;
    
    for(let i=0; i < A.length; i++) {
        if (stackSize === 0) {
            value = A[i];
            stack.push(A[i]);
            stackSize++;
        } else {
            if(value === A[i]) {
                stack.push(A[i]);
                stackSize++
            } else {
                stack.pop();
                stackSize--;
            }
        }
    }
    
    let candidate = -1;
    
    if(stackSize > 0) {
        candidate = value;
    }
    
    let leader = candidate
    
    for(let i=0; i < A.length; i++) {
        if (A[i] === value) {
            count++
        }
    }
    
    if(count <= Math.floor(A.length / 2)) {
        return equi;
    }
    
    let leaderReached = 0
    
    for (let i = 0; i < (A.length - 1); i++) {
        const startHalf = Math.floor((i + 1) / 2);
        const endHalf = Math.floor((A.length - (i + 1)) / 2);
        if (A[i] === value) {
            leaderReached++
        }
        
        if ((leaderReached > startHalf) && ((count - leaderReached) > endHalf)) {
            equi++;
        }
    }
    
    return equi;
    
}
