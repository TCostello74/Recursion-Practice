/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx = 1);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestLength = 0, idx = 0) {
  if (idx === words.length) return longestLength; 
  const currentLength = words[idx].length;
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }

  return longest(words, longestLength, idx + 1);

}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, result = "") {
  if (idx >= str.length) return result;
  result += str[idx];
  return everyOther(str, idx + 2, result);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === target) return idx;
  return findIndex(arr, target, idx +1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") return "";
  return revString(str.substr(1)) + str[0];

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  } 

  return strings;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

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
