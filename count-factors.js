function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let factors = 0;
    let i = 1;
    while((i * i) < N) {
        if (N % i === 0) {
            factors += 2;
        }
        i++;
    }
    
    if (i * i === N) {
        factors++;
    }
    
    return factors;
}
