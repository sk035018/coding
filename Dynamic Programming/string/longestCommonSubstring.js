/**
 * We have to find the length of longest common substring in the given two strings.
 * ex s1 = 'abdefc', s2 = 'cbdezc',
 * longest common substring is 'bde' , o/p = 3
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

  let maxSubstring = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      memo[i][j] = s1[i - 1] === s2[j - 1] ? 1 + memo[i - 1][j - 1] : 0;
      maxSubstring = Math.max(maxSubstring, memo[i][j]);
    }
  }
  return maxSubstring;
};

console.log(topDownApproach("abdefc", "cbdezc"));
