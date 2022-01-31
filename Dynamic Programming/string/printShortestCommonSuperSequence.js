/**
 * We are given with two strings we have to find,
 * and print the shortest super sequence of both combination of both strings.
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
          ? memo[i - 1][j - 1] + 1
          : Math.max(memo[i - 1][j], memo[i][j - 1]);
    }
  }
  const superSequenceLength = m + n - memo[m][n];
  let result = "",
    i = m,
    j = n;

  while (result.length < superSequenceLength) {
    if (s1[i - 1] === s2[j - 1]) {
      result = s1[i - 1] + result;
      i--;
      j--;
    } else {
      if (memo[i - 1][j] > memo[i][j - 1]) {
        result = s1[i - 1] + result;
        i--;
      } else {
        result = s2[j - 1] + result;
        j--;
      }
    }
  }

  return result;
};

console.log(topDownApproach("abcdaf", "acbcf"));
