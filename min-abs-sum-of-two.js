function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let left = 0;
    let right = A.length - 1;
    const aSorted = A.sort((a,b) => (a - b));
    let minimum = Math.abs(aSorted[left] + aSorted[right])

    while (left <= right) {
        let l = aSorted[left];
        let r = aSorted[right];

        const args = [
            Math.abs(l * 2),
            Math.abs(r * 2),
            Math.abs(r + l),
            minimum
        ];

        minimum = Math.min(...args)

        if (l >= 0 || r <= 0) {
            break;
        }
        
        if (Math.abs(l) < Math.abs(r)) {
            right--;
        } else if (Math.abs(r) < Math.abs(l)) {
            left++
        } else {
            right--;
            left++;
        }
    }

    return minimum
}
