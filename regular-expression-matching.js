// Regular Expression Matching:
// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // If they're equal quickly signal that a match is found
    if (s == p) {
        return true;
    }
};
/* 
variable that holds the current string index that needs matching
variable that holds the current pattern index that needs matching
variable that holds the previous string character
loop through the pattern 
 If the letters are equal continue to the next letter
 If pattern is a  . Move to the next character and update the preceeding character variable to .
 if pattern is * compare the current string character to the previous character. 
 if the previous character is a . and there are no more characters in the pattern return match found. 
 if the previous character is a . and there are more non asterisk characters in the pattern look for the next pattern character in the stringa
 else if they are the same character then start a subfunction call that looks forward in the string and moves the string index to the next character that is not a repeat.
*/