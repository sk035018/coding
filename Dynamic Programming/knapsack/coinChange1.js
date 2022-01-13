/**
 * We are provided with the array of coins,
 * we have to find total number of ways in which the coins can be sum up to given sum,
 * coins can repeat
 */

const topDownApproach = (coins, sum) => {
    const memo = [];
    memo.push(new Array(sum + 1).fill(0));
    memo[0][0] = 1;
    
    for (let i = 0; i < coins.length; i++) {
        const innerArray = new Array(sum + 1);
        innerArray[0] = 1;
        memo.push(innerArray);
    }

    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= sum; j++) {
            memo[i][j] = coins[i-1] > j
                ? memo[i-1][j]
                : memo[i-1][j] + memo[i][j - coins[i-1]];
        }
    }
    return memo[coins.length][sum];
};

console.log(topDownApproach([1,2,3,4], 5));