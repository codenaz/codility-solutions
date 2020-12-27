function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const fib = new Array(30);

    fib[0] = 1; fib[1] = 2;

    for (let i = 2; i < fib.length; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    const jumps = new Array(A.length + 1);

    for (let i = 0; i < jumps.length; i++) {
        if (i < A.length && A[i] === 0) {
            jumps[i] = -1;
            continue;
        }

        let minJump = Number.MAX_SAFE_INTEGER;

        for (let j = fib.length; j >= 0; j--) {
            const k = i - fib[j];

            if (k < -1) {
                continue;
            }

            if (k === -1) {
                minJump = 1;
                break;
            }

            if (jumps[k] < 0) {
                continue;
            }

            const newMinJump = jumps[k] + 1;

            if (newMinJump < minJump) {
                minJump = newMinJump;
            }
        }

        if (minJump !== Number.MAX_SAFE_INTEGER) {
            jumps[i] = minJump
        } else {
            jumps[i] = -1;
        }
    }
    return jumps[A.length];
}
