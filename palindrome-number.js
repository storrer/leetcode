// Palindrome Number:
// https://leetcode.com/problems/palindrome-number/description/

/**
 * @param {number} x
 * @return {boolean}
 * 
 */
 var isPalindrome = function(x) {
    // If input is negative or ends in zero return false
    if (x < 0) {
        return false;
    }
    else if ((x >= 0) && (x <= 9)) {
        return true; // But if the number is between zero and ten return true
    }
    else if (x % 10 === 0) {
        return false;
    }
    

    // Reverse the input integer and determine if palidrome
    if (x === reverseInteger(x)) {
        return true;
    }
    else {
        return false;
    }
};

let reverseInteger = function(x) {
    let reverse = 0;    
    for (let y = x; y > 0;) {
        let lastDigit = y % 10;
        reverse = (reverse * 10) + lastDigit;
        y = y - lastDigit;
        y = y/10;
    }
    return reverse;
};