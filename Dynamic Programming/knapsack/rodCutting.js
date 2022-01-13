/**
 * We are given with a rod of length N, and two arrays rodLength,
 * price consisting of rodLength and their respective prices,
 * we have to cut the rod in n number of pieces such that sum of their prices is maximized
 */

const topDownApproach = (rodLength, price, N) => {
    const memo = [];
    memo.push(new Array(N + 1).fill(0));
    for (let i = 0; i < rodLength.length; i++) {
        const innerArray = new Array(N + 1);
        innerArray[0] = 0;
        memo.push(innerArray);
    }

    for (let i = 1; i <= rodLength.length; i++) {
        for (let j = 1; j <= N; j++) {
            memo[i][j] = rodLength[i-1] > j
                ? memo[i-1][j]
                : Math.max(
                    memo[i-1][j],
                    price[i-1] + memo[i][j - rodLength[i-1]]
                );
        }
    }
    return memo[rodLength.length][N];
};

console.log(topDownApproach([1,2,3,4], [5,6,8,8], 4));