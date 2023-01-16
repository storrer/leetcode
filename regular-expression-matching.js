// Regular Expression Matching:
// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
    // Kick off the program at the beginning of both string and pattern.
    return IsMatchRecursion(s, p, 0, 0);
};

// A recursive function that checks the string against the pattern incrementally.
let IsMatchRecursion = function (string, pattern, stringIndex, patternIndex) {
    // If we are at the end of the pattern, return whether we are also at the end of string.

    // If pattern character is omissible, skip forward two characters and recur.

        // If omission does not produce a match, enter incremental comparison loop.
            // Move forward one string character and two pattern characters.
            // If this produces a match, program can stop.
            // If it does not produce a match, move to next string character,
            // compare, and, possibly, recur.
    
    // If pattern character was not repeatable or omissible and matches the string, increment
    // indices and recur.
    
    // If none of the above hold true, return false.
    
    
}