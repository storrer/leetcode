// Regular Expression Matching:
// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // Kick off the program at the beginning of both string and pattern.
    return isMatchRecursion(s, p, 0, 0);
};
// DISCLAIMER this is a theoretically correct solution that, when run, exceeds the leet code time limit.

// A recursive function that checks the string against the pattern incrementally.
let isMatchRecursion = function (string, pattern, sIndex, pIndex) {
    // If we are at the end of the pattern, return whether we are also at the end of string.
    if (pattern.length == pIndex) {
        if (string.length == sIndex) {
            return true;
        }
        else {
            return false;
        }
    }

    // If pattern character is omissible, skip forward two pattern characters and recur.
    if (pattern[pIndex + 1] == "*") {
        if (isMatchRecursion(string, pattern, sIndex, pIndex + 2)) {
            return true;
        }
        // If omission does not produce a match, enter incremental comparison loop.
        while (string[sIndex] == pattern[pIndex] || pattern[pIndex] == ".") {
            // Increment sIndex by one
            sIndex = sIndex + 1;
            // Move forward two pattern characters for this iteration. 
            if (isMatchRecursion(string, pattern, sIndex, pIndex + 2)) {
                // If this produces a match, program can stop.
                return true;
            }
            // If skipping forward it does not produce a match, continue compare loop.
        }
    }
    else if (string[sIndex] == pattern[pIndex] || pattern[pIndex] == ".") {
        // If pattern character was not repeatable or omissible and matches the string, 
        // recur one index forward.
        if (isMatchRecursion(string, pattern, sIndex + 1, pIndex + 1)) {
            // If the recursion is true we have a match and this iteration can stop.
            return true;
        }
        
    }    
    // If none of the above hold true, return false, there is no match.
    return false;   
}