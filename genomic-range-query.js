function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    const SCollection = S.split('');
    
    const DNADict = {A: 1, C: 2, G: 3};
    
    const prefixSumsOfDNAs = [[0],[0],[0]];
    
    for(let i = 0; i < SCollection.length; i++) {
        if(SCollection[i] === 'A') {
            prefixSumsOfDNAs[0][i + 1] = prefixSumsOfDNAs[0][i] + 1;
            prefixSumsOfDNAs[1][i + 1] = prefixSumsOfDNAs[1][i];
            prefixSumsOfDNAs[2][i + 1] = prefixSumsOfDNAs[2][i];
        } else if (SCollection[i] === 'C') {
            prefixSumsOfDNAs[0][i + 1] = prefixSumsOfDNAs[0][i];
            prefixSumsOfDNAs[1][i + 1] = prefixSumsOfDNAs[1][i] + 1;
            prefixSumsOfDNAs[2][i + 1] = prefixSumsOfDNAs[2][i];
        } else if (SCollection[i] === 'G') {
            prefixSumsOfDNAs[0][i + 1] = prefixSumsOfDNAs[0][i];
            prefixSumsOfDNAs[1][i + 1] = prefixSumsOfDNAs[1][i];
            prefixSumsOfDNAs[2][i + 1] = prefixSumsOfDNAs[2][i] + 1;
        } else {
            prefixSumsOfDNAs[0][i + 1] = prefixSumsOfDNAs[0][i];
            prefixSumsOfDNAs[1][i + 1] = prefixSumsOfDNAs[1][i];
            prefixSumsOfDNAs[2][i + 1] = prefixSumsOfDNAs[2][i];
        }
    }
    
    const minimumImpacts = [];
    
    for(let i = 0; i < P.length; i++) {
        if(prefixSumsOfDNAs[0][Q[i] + 1] - prefixSumsOfDNAs[0][P[i]] > 0) {
            minimumImpacts.push(1);
        } else if (prefixSumsOfDNAs[1][Q[i] + 1] - prefixSumsOfDNAs[1][P[i]] > 0) {
             minimumImpacts.push(2);
        } else if (prefixSumsOfDNAs[2][Q[i] + 1] - prefixSumsOfDNAs[2][P[i]] > 0) {
             minimumImpacts.push(3);
        } else {
            minimumImpacts.push(4)
        }
    }
    
    return minimumImpacts;
    
}
