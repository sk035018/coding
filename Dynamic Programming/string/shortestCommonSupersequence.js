/**
 * We have to find the length of shortest common super sequence of given two strings
 * ex s1 = abxav, s2 = aabcdax, shortest super sequence be aabxcdavx, O/P = 9
 * Basically, supersequence is the string from which we can extract both given strings as subsequence.
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
  return m + n - memo[m][n];
};

console.log(topDownApproach("abxav", "aabcdax"));
