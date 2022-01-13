/**
 * Is there two subsets which have equal sum
 * [1,2,3]
 * Solution would be true, as [1,2] and [3], both arrays have sum 3 
 */

const topDownApproach = (values) => {
    const totalSum = values.reduce((acc, nextVal) => acc + nextVal, 0);
    if(totalSum % 2 !== 0) {
        return false;
    } else {
        const sum = totalSum / 2;
        const memo = [];
        memo.push(new Array(sum + 1).fill(false));
        memo[0][0] = true;

        for (let i = 0; i < values.length; i++) {
            const innerArray = new Array(sum + 1);
            innerArray[0] = true;
            memo.push(innerArray);
        }

        for (let i = 1; i <= values.length; i++) {
            for (let j = 1; j <= sum; j++) {
                if(values[i] > j) {
                    memo[i][j] = memo[i-1][j];
                } else {
                    memo[i][j] = memo[i-1][j - values[i]] || memo[i-1][j];
                }
            }
        }
        return memo[values.length][sum];
    }
};

console.log(topDownApproach([1,2,3]));