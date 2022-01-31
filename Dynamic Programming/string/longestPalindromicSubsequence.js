/**
 * You have to find longest palindromic subsequence's length
 * ex- s1 = agbcba, longestPalindromicSubsequence = abcba, O/P be 5
 */

const topDownApproach = (s1) => {
  const s2 = s1.split("").reverse().join("");
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

  return memo[m][n];
};

console.log(topDownApproach("aqbcba"));
