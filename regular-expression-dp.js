// Regular Expression Matching:
// https://leetcode.com/problems/regular-expression-matching/

// Explanation follows function definition
function isMatch(s, p) {
    // Create a 2D array for the dynamic programming solution
    let dp = new Array(s.length + 1);
    // Initialize the 2D array with false
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

// No comments and using the .map() method

function isMatch(s, p) {
    let dp = new Array(s.length + 1).fill(null).map(() => new Array(p.length + 1).fill(false));
    dp[s.length][p.length] = true;

    for (let i = s.length; i >= 0; i--) {
        for (let j = p.length - 1; j >= 0; j--) {
            let firstMatch = (i < s.length && (p[j] === s[i] || p[j] === '.'));
            if (j + 1 < p.length && p[j + 1] === '*') {
                dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
            } else {
                dp[i][j] = firstMatch && dp[i + 1][j + 1];
            }
        }
    }
    return dp[0][0];
}

/*
This implementation uses a 2D booleanarray dp[][] where dp[i][j] represents whether 
the input string s up to index i matches the pattern p up to index j. The base case 
is when the pattern is empty, in which case the function returns true if the input 
string is also empty, i.e dp[s.length][p.length] = true.

The program iterates over dp array in reverse order, starting from the last 
index of both the string and the pattern, and for each index, it checks if the 
current character in the pattern is a '.' or it matches the current character in the string.

If the next character in the pattern is '*', then it has two possible matches. 
It can either match zero or more characters in the input string, or it can match 
one or more characters in the input string.

If the next character in the pattern is not '*', then it can only match one 
character in the input string.

The final result is stored in dp[0][0], which represents whether the entire 
input string s matches the entire pattern p.*/