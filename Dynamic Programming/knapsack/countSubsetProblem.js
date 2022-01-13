/**
 * Return the count of the total subsets having their sum equal to given sum.
 */

const topDownApproach = (values, sum) => {
  const memo = [];
  memo.push(new Array(sum + 1).fill(0));
  memo[0][0] = 1;
  for (let i = 1; i <= values.length; i++) {
    const innerArray = new Array(sum + 1);
    innerArray[0] = 1;
    memo.push(innerArray);
  }

  for (let i = 1; i <= values.length; i++) {
    for (let j = 1; j <= sum; j++) {
      memo[i][j] =
        values[i - 1] > j
          ? memo[i - 1][j]
          : memo[i - 1][j] + memo[i - 1][j - values[i - 1]];
    }
  }
  return memo[values.length][sum];
};

console.log(topDownApproach([2, 3, 5, 6, 8, 10], 10));
