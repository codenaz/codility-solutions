function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let root = Math.sqrt(N);

    if(Number.isInteger(root)) {
        return root * 4;
    }

    root = Math.floor(root);

    for(let i = root; i >= 1; i--) {
        const factor = N / i;
        if(Number.isInteger(factor)) {
            const perimeter = 2 * (i + factor);
            return perimeter;
        }
    }

    
}
