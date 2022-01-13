/**
 * We are provided with the array of coins,
 * we have to find minimum number of coins in which the coins can be sum up to given sum,
 * coins can repeat
 */

const topDownApproach = (coins, sum) => {
    const memo = [];
    memo.push(new Array(sum + 1).fill(Number.MAX_SAFE_INTEGER - 1));

    for (let i = 0; i < coins.length; i++) {
        const innerArray = new Array(sum + 1);
        innerArray[0] = 0;
        memo.push(innerArray);
    }

    /**
     * Here we are initializing second row as with one coin,
     * we can only get the number of coins sum / coin,
     * if result is in decimal we have to put MAX_INT value at that position.
     */

    for (let i = 1; i <= sum; i++) {
        memo[1][i] = i % coins[0] === 0
            ? i / coins[0]
            : Number.MAX_SAFE_INTEGER - 1;
    }

    for (let i = 2; i <= coins.length; i++) {
        for (let j = 1; j <= sum; j++) {
            memo[i][j] = coins[i-1] > j
                ? memo[i-1][j]
                : Math.min(
                    memo[i-1][j],
                    memo[i][j - coins[i-1]] + 1
                );
        }
    }

    return memo[coins.length][sum];
};

console.log(topDownApproach([1,1,2,3], 5));