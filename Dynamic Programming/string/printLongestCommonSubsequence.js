/**
 * We have to print the longest common subsequence in given two strings
 * ex a = abcdef, b = abedf
 * output = abdf
 */

const topDownApproach = (s1, s2) => {
  /**
   * This the code for longest common subsequence count.
   */
  const memo = [];
  let m = s1.length,
    n = s2.length;
  memo.push(new Array(n + 1).fill(0));

  for (let i = 0; i < m; i++) {
    const innerArray = new Array(n + 1);
    innerArray[0] = 0;
    memo.push(innerArray);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= m; j++) {
      memo[i][j] =
        s1[i - 1] === s2[j - 1]
          ? 1 + memo[i - 1][j - 1]
          : Math.max(memo[i - 1][j], memo[i][j - 1]);
    }
  }

  /**
   * We are driving the string from the traversal of generated matrix.
   */

  const longestSubsequenceLength = memo[m][n];
  let result = "";
  while (result.length < longestSubsequenceLength) {
    if (s1[m - 1] === s2[n - 1]) {
      result = s1[m - 1] + result;
      m--;
      n--;
    } else {
      if (memo[m][n - 1] > memo[m - 1][n]) {
        n--;
      } else {
        m--;
      }
    }
  }
  return result;
};

console.log(topDownApproach("abzcdefsq", "abezdfqsq"));
