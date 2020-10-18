function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const closingBracketDict = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    
    const openBracketDict = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    
    const SArray = S.split('');
    
    if (SArray.length === 0) {
        return 1;
    }
    
    const bucket = [];
    
    for(let i = 0; i < SArray.length; i++) {
        if(openBracketDict[SArray[i]]) {
            bucket.push(SArray[i]);
        } else if(closingBracketDict[SArray[i]]) {
            const lastItem = bucket.pop();
            if (lastItem !== closingBracketDict[SArray[i]]) {
                return 0;
            }
        }
    }

    if(bucket.length === 0) {
        return 1;
    }
    
    return 0;
}
