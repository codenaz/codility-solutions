function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const pointPairs = A.map((value, index) => [index - value, index + value]).sort((a, b) => a[0] - b[0]);
    
    const startPoints = pointPairs.map(point => point[0]);
    
    let count = 0;
    
    
    for (i = 0; i < startPoints.length; i++) {
        const endPoint = pointPairs[i][1];
        
        const greaterIndex = binarySearch(startPoints, endPoint);
        
        if (greaterIndex < 0) {
            count += startPoints.length
        } else {
            count += greaterIndex;
        }
        
        count = count - (i + 1); // remove self and already counted elements
        if (count > 10000000) {
            return -1;
        }
    
    }
    
    return count;
}

function binarySearch(arr, value){
    let m = 0; let n = arr.length - 1;
    while (m <= n) {
        const mid = Math.floor((n + m) / 2);
        if (arr[mid] > value) {
            if ((mid - 1) < 0 || (arr[mid - 1]) <= value) {
                return mid;
            }
            n = mid - 1;
        } else {
            m = mid + 1;
        }
    }
    return -1;
}
