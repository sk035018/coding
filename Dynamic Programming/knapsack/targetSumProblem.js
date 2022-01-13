/**
 * Add the signs +/- before each element of the array to form the given sum,
 * count total formations of such combinations and return the total.
 */

const topDownApproach = (values, sum) => {
    const totalSum = values.reduce((acc, nextVal) => acc + nextVal, 0);
    
    /**
     * Now if we do partitions of given array in such manner that
     * S1 = e1 + e2 + e3 + ..., and S2 = -(e1' + e2' + e3' + ...)
     * then we can say that 
     * S1 - S2 = sum ---(1)
     * S1 + S2 = totalSum ---(2)
     * By evaluating above eq(s), we can conclude that
     * 2S1 = sum + totalSum
     * S1 = (sum + totalSum) / 2;
     */

    if((sum + totalSum) % 2 !== 0) {
        return 0;
    }

    const requiredSum = (sum + totalSum) / 2;
    const memo = [];
    memo.push(new Array(requiredSum + 1).fill(0));
    memo[0][0] = 1;

    for (let i = 0; i < values.length; i++) {
        const innerArray = new Array(requiredSum + 1);
        innerArray[0] = 1;
        memo.push(innerArray);
    }

    for (let i = 1; i <= values.length; i++) {
        for (let j = 1; j <= requiredSum; j++) {
            memo[i][j] = values[i-1] > j
                ? memo[i-1][j]
                : memo[i-1][j] + memo[i-1][j - values[i-1]];
        }
    }
    return memo[values.length][requiredSum];
};

console.log(topDownApproach([1,1,2,3], 1));