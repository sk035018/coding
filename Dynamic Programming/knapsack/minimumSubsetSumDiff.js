/**
 * We have to divide a given array in two subsets
 * such that difference of their sum is minimum
 */

const topDownApproach = (values) => {
    const memo = [], n = values.length;
    const totalSum = values.reduce((acc, nextVal) => acc + nextVal, 0);
    memo.push(new Array(totalSum + 1).fill(false));
    memo[0][0] = true;
    console.log(totalSum);
    for (let i = 1; i <= n; i++) {
        const innerArray = new Array(totalSum + 1);
        innerArray[0] = true;
        memo.push(innerArray);
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= totalSum; j++) {
            memo[i][j] = values[i-1] > j
                ? memo[i-1][j]
                : memo[i-1][j] || memo[i-1][j - values[i-1]];
        }
    }
    
    const validCandidates = [];
    let minSum = totalSum;
    
    for (let i = 0; i <= memo[n].length/2; i++) {
        if(memo[n][i] === true) {
            validCandidates.push(i);
        }
    }
    
    for (let i = 0; i < validCandidates.length; i++) {
        minSum = Math.min(minSum, Math.abs(totalSum - (2 * validCandidates[i])));
    }

    return minSum;
};

console.log(topDownApproach([2, 3, 4, 5, 8, 11]));