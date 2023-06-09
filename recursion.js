/** product: calculate the product of an array of numbers. */

function product(nums, index=0) {
    if (index === nums.length-1)
        return nums[index];

    return nums[index] * product(nums, index+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index=0) {
    if (index === words.length - 1)
        return words[index].length;

    return Math.max(words[index].length, longest(words, index+1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
    if (str.length <= 2)
        return str[0];

    return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index=0) {
    const left = index;
    const right = str.length-1-index;
    if (left >= right)
        return true;

    return str[left] === str[right] && isPalindrome(str, index+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index=0) {
    if (index === arr.length)
        return -1;

    if (arr[index] === val)
        return index;

    return findIndex(arr, val, index+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index=0, result='') {
    if (index === str.length)
        return result;

    return revString(str, index+1, str[index]+result);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    const result = [];
    for (let key in obj) {
        if (typeof obj[key] === "string")
            result.push(obj[key]);
        else if (typeof obj[key] === "object")
            result.push(...gatherStrings(obj[key]));
    }

    return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length-1) {
    if (left > right)
        return -1;

    const mid = Math.floor((left + right)/2);
    const midVal = arr[mid];
    if (midVal === val)
        return mid;

    // search left
    if (val < midVal)
        return binarySearch(arr, val, left, mid-1);
    else
        return binarySearch(arr, val, mid+1, right);
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch
};
