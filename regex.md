# Intuition
I used a recursive solution prior to the current approach: it was too slow.

# Approach
I searched for a way to speed up my solution and found out about dynamic programming. I have commented the code more than usual because this is my first dynamic programming exercise and I figure it may be helpful for someone who hasn't learned about dynamic programming, yet.

# Complexity
- Time complexity:
The time complexity of this program is `O(n*m)` where `n` is the length of the input string and `m` is the length of the pattern string.

- Space complexity:
The space complexity of this program is also `O(n*m)` because we are using a 2D dynamic programming array of size `n*m` to store the intermediate results.

# Code
```
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // Create a 2D array 
    let dp = new Array(s.length + 1);
    // Initialize the array with false
    for (let i = 0; i <= s.length; i++) {
        dp[i] = new Array(p.length + 1).fill(false);
    }
    // The base case is when the pattern is empty, in which case the function returns true 
    // if the input string is also empty
    dp[s.length][p.length] = true;

    // Iterate over the dp array in reverse order, starting from the last index of both the string and the pattern
    for (let i = s.length; i >= 0; i--) {
        for (let j = p.length - 1; j >= 0; j--) {
            // Check if the current character in the pattern is '.' or it matches the current character in the string
            let firstMatch = (i < s.length && (p[j] === s[i] || p[j] === '.'));
            // If the next character in the pattern is '*'
            if (j + 1 < p.length && p[j + 1] === '*') {
                // The pattern can match zero or more characters in the input string
                // OR
                // The pattern can match one or more characters in the input string
                dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
            } 
            // If the next character in the pattern is not '*'
            else {
                // The pattern can only match one character in the input string
                dp[i][j] = firstMatch && dp[i + 1][j + 1];
            }
        }
    }
    // Return the final result which represents whether the entire input string matches the entire pattern
    return dp[0][0];
}


```