/**
 * You have to return minimum number of insertion and deletion in order
 * to convert one string to another given string,
 * ex s1 = heap, s2 = pea, insert p at 0, remove h and p
 * output should be 1, 2
 */

const topDownApproach = (s1, s2) => {
  const memo = [],
    m = s1.length,
    n = s2.length;
  memo.push(new Array(n + 1).fill(0));
  for (let i = 0; i < m; i++) {
    const innerArray = new Array(n + 1);
    innerArray[0] = 0;
    memo.push(innerArray);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      memo[i][j] =
        s1[i - 1] === s2[j - 1]
          ? 1 + memo[i - 1][j - 1]
          : Math.max(memo[i - 1][j], memo[i][j - 1]);
    }
  }

  const longestCommonSubsequenceLength = memo[m][n];

  return {
    insertion: n - longestCommonSubsequenceLength,
    deletion: m - longestCommonSubsequenceLength,
  };
};

console.log(topDownApproach("heap", "pea"));
