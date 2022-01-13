/**
 * unbound Knapsack problem
 * We have a bag which is having a fixed size,
 * we have to put the items in that bag as per the condition.
 * Either we can put an item as whole or not that item,
 * unlikely the 0 1 knapsack we can add an item in bag n number of times 
 */

/**
 * Find the maximum profit by putting the items most worth.
 */

const topDownApproach = (items, values, size) => {
    const memo = [];
    memo.push(new Array(size + 1).fill(0));
    for (let i = 0; i < items.length; i++) {
        const innerArray = new Array(size + 1);
        innerArray[0] = 0;
        memo.push(innerArray);
    }

    for (let i = 1; i <= items.length; i++) {
        for (let j = 1; j <= size; j++) {
            memo[i][j] = values[i-1] > j
                ? memo[i-1][j]
                : Math.max(
                    memo[i-1][j],
                    values[i-1] + memo[i][j - values[i-1]] // instead of i-1 we used i
                );                                         // as we can include this item again 
        }
    }
    return memo[items.length][size];
};

console.log(topDownApproach([2,5,6], [4,7,8], 5));