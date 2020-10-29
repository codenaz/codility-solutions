function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const splitS = S.split('');
    const bucket = [];
    
    if (!splitS.length) {
        return 1;
    }
    
    for(let i = 0; i < splitS.length; i++) {
        if (splitS[i] !== '(' && !bucket.length) {
            return 0
        }
        
        if (splitS[i] === '(') {
            bucket.push('(');
        } else if (splitS[i] === ')') {
            bucket.pop();
        }
    }
    
    return bucket.length ? 0 : 1;
}
