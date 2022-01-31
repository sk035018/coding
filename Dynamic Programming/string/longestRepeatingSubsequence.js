/**
 * We have to find the length of longest subsequence,
 * which occurs at least twice in the given string,
 */

const topDownApproach = (s) => {
  const memo = [],
    m = s.length;
  memo.push(new Array(m + 1).fill(0));

  for (let i = 0; i < m; i++) {
    const innerArray = new Array(m + 1);
    innerArray[0] = 0;
    memo.push(innerArray);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= m; j++) {
      memo[i][j] =
        s[i - 1] === s[j - 1] && i !== j
          ? 1 + memo[i - 1][j - 1]
          : Math.max(memo[i - 1][j], memo[i][j - 1]);
    }
  }

  return memo[m][m];
};

console.log(topDownApproach("AABEBCDD"));
