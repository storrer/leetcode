/*
This implementation uses a 2D boolean array dp[][] where dp[i][j] represents
whether the input string s up to index i matches the pattern p up to index j. 
The base case is when the pattern is empty, in which case the function returns 
true if the input string is also empty, i.e dp[s.length()][p.length()] = true.

The program iterates over dp array in reverse order, starting from the last 
index of both the string and the pattern, and for each index, it checks if the 
current character in the pattern is a '.' or it matches the current character 
in the string.

If the next character in the pattern is '*', then it has two possible matches. 
It can either match zero or more characters in the input string, or it can match 
one or more characters in the input string.

If the next character in the pattern is not '*', then it can only match one 
character in the input string.

The final result is stored in dp[0][0], which represents whether the entire 
input string s matches the entire pattern p.

The dynamic programming approach will improve the performance by avoiding the 
recomputation of already computed subproblems, so it will run faster than the 
recursion based implementation.


*/

// Faster
public class RegularExpression {
    public boolean isMatch(String s, String p) {
        boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];
        dp[s.length()][p.length()] = true;

        for (int i = s.length(); i >= 0; i--) {
            for (int j = p.length() - 1; j >= 0; j--) {
                boolean firstMatch = (i < s.length() && (p.charAt(j) == s.charAt(i) || p.charAt(j) == '.'));
                if (j + 1 < p.length() && p.charAt(j + 1) == '*') {
                    dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
                } else {
                    dp[i][j] = firstMatch && dp[i + 1][j + 1];
                }
            }
        }
        return dp[0][0];
    }
}

// Slower
public class RegexMatchingDP {
    public boolean isMatch(String s, String p) {
        boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];
        // base case: an empty pattern matches an empty string
        dp[s.length()][p.length()] = true;

        for (int i = s.length(); i >= 0; i--) {
            for (int j = p.length() - 1; j >= 0; j--) {
                boolean firstMatch = (i < s.length() && (p.charAt(j) == s.charAt(i) || p.charAt(j) == '.'));
                if (j + 1 < p.length() && p.charAt(j + 1) == '*') {
                    // case 1: matches zero or more characters in the input string
                    // case 2: matches one or more characters in the input string
                    dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
                } else {
                    // can only match one character in the input string
                    dp[i][j] = firstMatch && dp[i + 1][j + 1];
                }
            }
        }
        // final result: whether the entire input string matches the entire pattern
        return dp[0][0];
    }
}
