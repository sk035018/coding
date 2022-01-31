/**
 * We are given with a string, we have to find the number of characters to delete from it,
 * in order to make it longest palindromic subsequence.
 */

const topDownApproach = (str1) => {
  const str2 = str1.split("").reverse().join(""),
    m = str1.length,
    memo = [];

  memo.push(new Array(m + 1).fill(0));
  for (let i = 0; i < m; i++) {
    const innerArray = new Array(m + 1);
    innerArray[0] = 0;
    memo.push(innerArray);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= m; j++) {
      memo[i][j] =
        str1[i - 1] === str2[j - 1]
          ? 1 + memo[i - 1][j - 1]
          : Math.max(memo[i - 1][j], memo[i][j - 1]);
    }
  }

  return m - memo[m][m];
};

console.log(topDownApproach("agbcba"));
