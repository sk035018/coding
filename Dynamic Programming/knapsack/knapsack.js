/**
 * 0-1 Knapsack problem
 * We have a bag which is having a fixed size,
 * we have to put the items in that bag as per the condition.
 * Either we can put an item as whole or not that item.
 */

/**
 * Find the maximum profit by putting the items most worth.
 */

const recursiveApproach = (weights, prices, bagWeight) => {
    const solution = (weights, prices, bagWeight, n) => {
        if(n === 0 || bagWeight === 0) {
            return 0;
        }
        if(weights[n-1] > bagWeight) {
            return solution(weights, prices, bagWeight, n-1);
        } else if(weights[n-1] <= bagWeight) {
            return Math.max(
                prices[n-1] + solution(weights, prices, bagWeight - weights[n-1], n-1),
                solution(weights, prices, bagWeight, n-1)
            );
        }
    };
    return solution(weights, prices, bagWeight, weights.length);
};

const weights = [1,3,4,5,4,7,5,1,4,6,7,8], prices = [1,4,5,7,4,2,5,4,8,4,2,7], bagWeight = 25;
let date = new Date();
console.log(recursiveApproach(weights, prices, bagWeight));
console.log(new Date().getTime() - date.getTime());

const recursiveMemorization = (weights, prices, bagWeight) => {
    const memo = {};
    const solution = (weights, prices, bagWeight, n) => {
        if(n === 0 || bagWeight === 0) {
            return 0;
        }
        const key = String(n) + String(bagWeight);
        if(memo[key]) return memo[key];
        if(weights[n-1] > bagWeight) {
            return memo[key] = solution(weights, prices, bagWeight, n-1);
        } else if(weights[n-1] <= bagWeight) {
            return memo[key] = Math.max(
                prices[n-1] + solution(weights, prices, bagWeight - weights[n-1], n-1),
                solution(weights, prices, bagWeight, n-1)
            );
        }
    };

    return solution(weights, prices, bagWeight, weights.length);
};

date = new Date();
console.log(recursiveMemorization(weights, prices, bagWeight));
console.log(new Date().getTime() - date.getTime());

/**
 * In Top Down Approach, we enter all the data in mxn matrix,
 * which is for changing entities.
 */

const topDownApproach = (weights, prices, bagWeight) => {
    const memo = [];
    memo.push(new Array(bagWeight + 1).fill(0));
    for (let i = 1; i <= weights.length; i++) {
        const innerArray = new Array(bagWeight + 1);
        innerArray[0] = 0;
        memo.push(innerArray);
    }
    for (let i = 1; i <= weights.length; i++) {
        for (let j = 1; j <= bagWeight; j++) {
            if(weights[i-1] > j) {
                memo[i][j] = memo[i-1][j];
            } else {
                memo[i][j] = Math.max(
                    prices[i-1] + memo[i-1][j - weights[i-1]],
                    memo[i-1][j]
                );
            }
        }
    }
    return memo[weights.length][bagWeight];
};

date = new Date();
console.log(topDownApproach(weights, prices, bagWeight));
console.log(new Date().getTime() - date.getTime());
