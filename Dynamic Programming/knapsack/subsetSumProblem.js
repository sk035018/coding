/**
 * Is there a subset in an array which is having given sum?
 */

const topDownApproach = (values, sum) => {
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
            if(values[i-1] > j) {
                memo[i][j] = memo[i-1][j];
            } else {
                memo[i][j] = memo[i-1][j-values[i-1]] || memo[i-1][j];
            }
        }
    }
    return memo[values.length][sum];
};

const values = [1,2,3,4,5,6,4,7,8,5,9], sum = 55;
console.log(topDownApproach(values, sum));