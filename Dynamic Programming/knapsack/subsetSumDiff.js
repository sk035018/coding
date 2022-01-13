/**
 * We have to find count of subsets of given array
 * such that difference of their sum is equal to given diff
 */

const topDownApproach = (values, diff) => {
    const sum = values.reduce((acc, nextVal) => acc + nextVal, 0);
    /**
     * Let say sum of subset1 be S1 and subset2 be S2,
     * S1 - S2 = diff --- (1)
     * S1 + S2 = sum --- (2)
     * From the above equations we can conclude that
     * 2S1 = diff + sum
     * S1 = (diff + sum) / 2
     * Thus, we have to count the subsets having sum (diff + sum) / 2
     */

    if((diff + sum) % 2 !== 0) {
        return 0;
    }

    const requiredSum = (diff + sum) / 2;
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

console.log(topDownApproach([1,1,2,3], 2));