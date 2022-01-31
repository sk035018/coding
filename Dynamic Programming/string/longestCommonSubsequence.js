/**
 * We have to find the longest common subsequence's length for given two strings
 * ex a = abcdef, b = abedf
 * common subsequence = abdf, output = 4
 */

const recursiveApproach = (s1, s2) => {
  const m = s1.length,
    n = s2.length;
  const func = (m, n) => {
    if (m === 0 || n === 0) {
      return 0;
    }
    if (s1[m - 1] === s2[n - 1]) {
      return 1 + func(m - 1, n - 1);
    } else {
      return Math.max(func(m - 1, n), func(m, n - 1));
    }
  };
  return func(m, n);
};

const s1 = "abcdefwsdc",
  s2 = "abedfsdaqsc"; // o/p = 7
let start = new Date();
console.log(recursiveApproach(s1, s2));
console.log(new Date().getTime() - start.getTime());

const recursiveMemoization = (s1, s2) => {
  const memo = {},
    m = s1.length,
    n = s2.length;
  const func = (m, n) => {
    if (m === 0 || n === 0) {
      return 0;
    }
    if (memo[String(m) + String(n)]) {
      return memo[String(m) + String(n)];
    }
    if (s1[m - 1] === s2[n - 1]) {
      return (memo[String(m) + String(n)] = 1 + func(m - 1, n - 1));
    } else {
      return (memo[String(m) + String(n)] = Math.max(
        func(m - 1, n),
        func(m, n - 1)
      ));
    }
  };
  return func(m, n);
};

start = new Date();
console.log(recursiveMemoization(s1, s2));
console.log(new Date().getTime() - start.getTime());

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
      if (s1[i - 1] === s2[j - 1]) {
        memo[i][j] = 1 + memo[i - 1][j - 1];
      } else {
        memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
      }
    }
  }
  return memo[m][n];
};

start = new Date();
console.log(topDownApproach(s1, s2));
console.log(new Date().getTime() - start.getTime());
