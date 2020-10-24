function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    const survivedArray = [0];
    let lastItem = 0;
    let stop = false;
    
    for(let i = 1; i < A.length; i++) {
        if(B[lastItem] === 1 && B[i] === 0) {
            stop = false;
            while(B[lastItem] === 1 && !stop) {
                if (A[lastItem] > A[i]) {
                    stop = true;
                } else {
                    survivedArray.pop();
                    lastItem = survivedArray[survivedArray.length - 1];
                    if(!survivedArray.length || B[lastItem] === 0) {
                        survivedArray.push(i);
                        lastItem = i;
                        stop = true;
                    }
                }
            }
        } else {
            survivedArray.push(i);
            lastItem = i;
        }
    }
   
    return survivedArray.length;
}
