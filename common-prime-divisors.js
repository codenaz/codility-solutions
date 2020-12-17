// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let totalCount = 0;

    for(let i = 0; i < A.length; i++) {
        if (haveSimilarFactors(A[i], B[i])) {
            totalCount += 1;
        }
    }

    return totalCount;
}

function haveSimilarFactors(A, B) {
    if (A == B) {
        return true;
    }

    if ([A, B].includes(1)) {
        return false
    }

    const highestDivisor = gcd(A, B);

    if (gcd(A, B) === 1) {
        return false;
    }

    const canBreakDownA = canBreakDownNumberToOne(A, highestDivisor);

    const canBreakDownB = canBreakDownNumberToOne(B, highestDivisor);

    if (canBreakDownA && canBreakDownB) {
        return true
    }

    return false;
}

function gcd(A, B) {
    if (A % B === 0) {
        return B;
    } else {
        return gcd(B, A % B);
    }
}

function canBreakDownNumberToOne(value, factor) {
    let newValue = value;
    let newFactor = factor;
     
     while (newValue % newFactor === 0) {
         newValue /= newFactor;
         if (newValue === 1) {
             return true;
         }
         newFactor = gcd(newValue, factor)
         if (newFactor === 1) {
             return false;
         }
     }

     return false;

}
