function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    const F = Array(N + 1).fill(0);

    let i = 2;

    while(i * i <= N) {
        k = i * i;

        while(k <= N) {
            if (F[k] === 0) {
                F[k] = i
            }
            k += i;
        }

        i +=1;
    }

    const semiPrimesCount = [];
    let currentCount = 0
    for (let j = 0; j < F.length; j++) {
        if(F[j] !== 0) {
            const x = j / F[j];
            if (F[x] === 0) {
                currentCount += 1;
            }
        }
        semiPrimesCount[j] = currentCount;
    }
    
    const semiPrimesWithinRange = [];

    for(let j = 0; j < P.length; j++) {
        const x = P[j] === 0 ? 0 : semiPrimesCount[P[j] - 1];
        const y = semiPrimesCount[Q[j]];

        const total = y - x;

        semiPrimesWithinRange.push(total);
    }

    return semiPrimesWithinRange;
}
