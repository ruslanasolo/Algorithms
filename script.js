/* 1 Given a string of characters as input, write a function that returns it with the characters reversed.
const reverse_str = () => {
   let res1 = reverse_str1("Learning JavaScript")
}
***  split(), reverse(), join() */
const reverse_str = (str) => {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
test_reverse_str = () => {
    const res1 = reverse_str("");
    assert(res1 == "");

    const res2 = reverse_str("abcd");
    assert(res2 == "dcba");
}
//console.log(test_reverse_str);
//console.log(reverse_str("Learning JavaScript"));
//________________________________________________________________________________________
/*2. A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.
"Eva" = False, "eve" = true; "Hello" = False,  "" = ?   "Cigar? Toss it in a can. It is so tragic" = True */
const check_palindrome = (someDate) => {
    someDate = someDate.toLowerCase();
    for (let i = 0; i < someDate.length / 2; i++) {
        if (someDate[i] !== someDate[someDate.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
//console.log(check_palindrome("Eve"));
//---------------- 
// let low = 0; 
// let hi = someData.length()-1;
// while(low < hi){
//      if (someData[low] !== someData[hi]){
//          return false;
//     }
//   low++; hi --;
// }
// //if we after loop, so it's palyndrom
// return true;
//________________________________________________________________________________________
/*3. Given an integer, reverse the order of the digits.
 integer to string -> .toString,  string into number -> parseInt() */
const reverse_int = (int) => {
    let intoStr = int.toString();
    let reversedInt = "";
    for (let i = intoStr.length - 1; i >= 0; i--) {
        reversedInt += intoStr[i];
    }
    return parseInt(reversedInt);
}
// //console.log(reverse_int(-1200));

// test_reverse_int= ()=>{
// const res1 = reverse_int("123");
// assert(res1 == "321");

// const res2 = reverse_int("-1200");
// assert(res2 == "-21");
// }

// res 14 -> 41  ( 14/10=1 , 14%10=4 //next step 1/10=0, 1%10=1, devide till got 0,)
const revInt = (number) => {
    let revNumber = 0;
    while (number > 0) {
        let div = number % 10;
        revNumber = revNumber * 10 + div;
        number = Math.floor(number / 10);
    }
    return revNumber;
}
//console.log(revInt(123))
//________________________________________________________________________________________
/*4. Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, 
print out “Buzz”; when it’s divisible by ////both 2 and 3, print out “Fizz Buzz”. */
// function fizzBuzz(){
//     var output;
//     for(var i=1;i<=100;i++){
//       output = '';
//       if(i%3 === 0){
//         output+='Fizz';
//       } 
//       if(i%5 === 0){
//         output+='Buzz';
//       } 
//       if(output === '') {
//         output+=i;
//       }
//       print(output);
//     }
//   }
const fizzbuzz = (anyNum) => {
    result = [];
    for (let i = 1; i <= anyNum; i++) {
        if (i % 2 === 0 & i % 3 === 0) {
            result.push("Fizz Buzz")
        } else if (i % 2 === 0) {
            result.push("Fizz")
        } else if (i % 3 === 0) {
            result.push("Buzz")
        } else {
            result.push(i)
        }
    }
    return result;
}
//console.log(fizzbuzz(18))
//________________________________________________________________________________________
// 5. Max Character
//Given a string of characters, return the character that appears the most often.
const maxChar = (someString) => {
    let maxCount = 0;
    let maxSymb = "";

    for (let i = 0; i < someString.length; i++) {
        let currCount = 1;
        for (let j = i; j < someString.length - 1; j++) {
            if (someString[i] === someString[j])
                currCount++;
        }
        if (currCount > maxCount) {
            maxCount = currCount;
            maxSymb = someString[i];
        }
    }
    return maxSymb;
}
//console.log(maxChar("Hello"))

// test_maxChar = ()=>{
//     const res1 = maxChar("Hello");
//     const expRes = "l";
//     if (res1 != expRes){
//     console.log('error');
//     }
//     else {console.log(expRes)
//     };
// }  
// test_maxChar();
const frChar = (string) => {
    let stringMap = {};
    let maxSym = "";
    let maxCount = 0;

    for (let i = 0; i < string.length; i += 1) {
        if (stringMap[string[i]] == undefined) {
            //first time - save symbol with counter = 1
            stringMap[string[i]] = 1;
        } else {
            //already have it with some counter
            stringMap[string[i]]++;
        }
        //we can check where is max
        if (stringMap[string[i]] > maxCount) {
            maxCount = stringMap[string[i]];
            maxSym = string[i];
        }
    }
    return maxSym;
}
//console.log(frChar("hello"));
//________________________________________________________________________________________
/* 6. Anagrams
 Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this
time complexity O(N + N) = O(2N) = O(N) 
space complexity O(R+R) = O(2R), where R - number of different symbols (ordinary would be 256) */
const getHashTable = (str) => {
    let stringMap = {};

    for (let i = 0; i < str.length; i += 1) {
        if (stringMap[str[i]] == undefined) {
            stringMap[str[i]] = 1;
        } else {
            stringMap[str[i]]++;
        }
    }
    return stringMap;
}
const anagram = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }
    let string1Map = getHashTable(string1);
    let string2Map = getHashTable(string2);

    for (let key in string1Map) {
        if (string1Map[key] !== string2Map[key]) {
            return false;
        }
    }
    return true;
}
//console.log(anagram("hello", "olleh"))

/*another way 
Space complexity O(1) (nothing), but time complexity is worst - linearithmic - O(N * LogN)
N LonN with .sort */

const anagr = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let strA = str1.split('').sort().join('');
    let strB = str2.split('').sort().join('');
    if (strA !== strB) {
        return false;
    }
    return true;
}
//console.log(anagr("hello", "olleh"))
//________________________________________________________________________________________
//7. Vowels . Given a string of words or phrases, count the number of vowels.
const vowelsCount = (string) => {
    let countVow = 0;
    //let characters = "aeiou";
    let chars = ['a', 'e', 'i', 'o', 'u'];

    for (let vowel of string.toLowerCase()) {
        if (chars.includes(vowel)) {
            countVow++
        }
    }
    return countVow;
}
//console.log("number of vowels", vowelsCount("Hello friends"))
//________________________________________________________________________________________
/* 8. Array Chunking
Given an array and a size, split the array items into a list of arrays of the given size. */
const arrChnk = (myArray, chunk) => {
    let newArray = [];

    for (let i = 0; i < myArray.length; i += chunk) {
        chunkArr = myArray.slice(i, i + chunk);
        newArray.push(chunkArr);
    }
    return newArray;
}
//console.log("this is chunk", arrChank([1, 2, 3, 4, 5, 6], 2));
//_______________________________________________________________________________________
/* 9. Reverse Array
Given an array of items, reverse the order. */
//9.1
const reversArr = (arr) => {
    let newArr = [];

    for (let i = 0; i < arr.length / 2; i++) {
        arr[i] = arr[arr.length - 1 - i];
        newArr.push(arr[i]);
    }
    return newArr;
}
// console.log(reversArr([1,2,3,4,5,6,7]));
//9.2
const complRevers = (origArr) => {
    let arr1 = new Array();
    let arr2 = new Array();
    let half = Math.floor(origArr.length / 2);
    for (let i = origArr.length - 1; i >= half; i--) {
        if (i != half) {
            arr1.push(origArr[i]);
        }
        arr2.push(origArr[i - half]);
    }
    let reversedArr = [...arr1, ...arr2];
    return reversedArr;
}
//console.log(complRevers([1,2,3,4,5,6,7]))
//________________________________________________________________________________________
/*10. Reverse Words
Given a phrase, reverse the order of the characters of each word.*/
//test case
// describe("Reverse Words", () => {
//  it("Should reverse words", () => {
//     assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
//    });
//   });
// ***** we use here a function for reverse a string 
// const reverse_str = (str) => {
//     let reversedStr = "";
//     for (let i = str.length -1; i >=0; i--){
//         reversedStr += str[i];
//     }
//     return reversedStr;
// }
// time complexity - O(N)
// space complexity - O(N), because we create additional array to return result the same size - N
const reverseWords = (incomes) => {
    let reversedPhrase = "";
    let tempArray = incomes.split(" ");

    for (let i = 0; i < tempArray.length; i++) {
        reversedPhrase += reverse_str(tempArray[i]);
        if (i != tempArray.length - 1) {
            reversedPhrase += " ";
        }
    }
    return reversedPhrase;
}
//console.log (reverseWords("How are you?"))
//if there is no .split we can use own split function
function my_split(str, separator) {
    //return array of words splitted by separator
    let arraySplit = [];
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != separator) {
            newStr += str[i];
        } else {
            arraySplit.push(newStr);
            newStr = "";
        }
    }
    arraySplit.push(newStr);
    return arraySplit;
}
//console.log (my_split("I love Javascript!", " "))
//________________________________________________________________________________________
//11. Capitalization
//Given a phrase, capitalize every word.
const capitalizeIt = (words) => {
    let justCapitalized = [];
    for (let word of words.split(" ")) {

        justCapitalized.push(word[0].toUpperCase() + word.slice(1))

    }
    return justCapitalized.join(" ");
}
//console.log(capitalizeIt("how are you?"))
//________________________________________________________________________________________
//12. Caesar Cipher
/* Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. 
If necessary, the shifting should wrap around back to the beginning or end of the alphabet. */
const cipher = (str, shift) => {
    let cipherString = "";
    for (let i = 0; i < str.length; i++) {
        if ((str.charCodeAt(i) >= 'A'.charCodeAt(0)) &&
            (str.charCodeAt(i) <= 'Z'.charCodeAt(0))) {
            getNewCode(str, i, 'A', shift);
            cipherString += newCode;
        } else if ((str.charCodeAt(i) >= 'a'.charCodeAt(0)) &&
            (str.charCodeAt(i) <= 'z'.charCodeAt(0))) {
            getNewCode(str, i, 'a', shift);
            cipherString += newCode;
        } else {
            cipherString += str[i];
        }
    }
    return cipherString;
}
//console.log(cipher("I love javascript!", 1))
const getNewCode = (str, i, startLetter, shift) => {
    let strCode = str.charCodeAt(i);
    strCode -= startLetter.charCodeAt(0);
    let newCode = strCode + shift;
    newCode = (newCode % 25) + startLetter.charCodeAt(0);
    return String.fromCharCode(newCode);
}
//________________________________________________________________________________________
/* 13. Ransom Note
Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the
magazine words.
1. split magazin words into array.
2. create object, go through word_array, put each word in object with count
3. split note, go through each note_word and check that it exist in word_object, and word.count > note_count
(for first impl, we can skip it)
time O(n) , where n number of words in notes
space complexity O (n + k), where n number of diff. words in note, k - number of diff. words in text */
const buildHash = (str) => {
    const magazineWords = str.split(" ");
    const hashWords = {};

    for (let i = 0; i < magazineWords.length; i++) {
        if (hashWords[magazineWords[i]] == undefined) {
            hashWords[magazineWords[i]] = 1;
        } else {
            hashWords[magazineWords[i]]++;
        }
    }
    return hashWords;
}
const ramsomNote = (note, pattern) => {
    let patternCheck = buildHash(pattern);
    let noteCheck = buildHash(note);

    for (let key in patternCheck) {
        if (noteCheck[key] == undefined) {
            return false;
        }
        if (noteCheck[key] < patternCheck[key]) {
            return false;
        }
    }
    return true;
}
//console.log(ramsomNote("hello perhect world, hello sun, hello sky", "hello sky sunny"));
//________________________________________________________________________________________
/* 14. Mean, Median, and Mode. Given an array of numbers, calculate the mean, median, and mode.
The mean is the average of all numbers and is sometimes called the arithmetic mean. 
Median : The median is the middle number in a group of numbers.
Mode : The mode is the number that occurs most often within a set of numbers. */

//mean
const meanFunc = (numberSet) => {
    const meanValue = numberSet.reduce((accum, currentVal) => accum + currentVal, 0) / numberSet.length;
    return meanValue;
}

//median
const medianFunc = (numberSet) => {
    const arrSorted = numberSet.sort();
    let middle = Math.floor(arrSorted.length / 2) - 1;
    let result;

    if (arrSorted.length % 2 === 0) { //even
        result = (arrSorted[middle]) / 2 + (arrSorted[middle + 1]) / 2; // everage of two middle number
    } else {
        //midle number only
        result = arrSorted[middle];
    }
    return result;
}
//mode
const modeFunc = (numberSet) => {
    let table = {};
    let counted = 0;
    let mostPresent;

    for (let i = 0; i < numberSet.length; i++) {
        if (table[numberSet[i]] == undefined) {
            table[numberSet[i]] = 1
        } else {
            table[numberSet[i]]++
        }
        if (table[numberSet[i]] > counted) {
            counted = table[numberSet[i]]
            mostPresent = numberSet[i];
        }
    }
    return mostPresent;
}
//console.log(meanFunc([1, 2, 3, 4, 4, 5, 5]))
//console.log(meanFunc([1, 1, 2, 2, 3, 3, 4, 4]))
// console.log(medianFunc([1, 2, 3, 4, 4, 5, 5]))
// console.log(medianFunc([1, 1, 2, 2, 3, 3, 4, 4]))
//console.log(modeFunc([1, 2, 3, 4, 4, 4,4, 5, 5,5]))
//console.log(modeFunc([1, 1, 2, 2, 3, 3, 4, 4]))
//________________________________________________________________________________________
/* 15. Two Sum. (O(n))
Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
}); */
const fillHashMap = (numbers) => {
    const hashElems = {};

    for (let i = 0; i < numbers.length; ++i)
        if (hashElems[numbers[i]] == undefined) {
            hashElems[numbers[i]] = [];
            hashElems[numbers[i]].push(i);
        } else {
            hashElems[numbers[i]].push(i);
        }
    return hashElems;
}
const isValid = (ind, indArr) => {
    if (indArr == undefined) {
        return false;
    }

    //it's valid only if indArr contains at least 1 index > ind
    for (let i = 0; i < indArr.length; ++i) {
        if (indArr[i] > ind)
            return true;
    }
    return false;
}
const twoSum = (arr, sum) => {
    let elemCheck = fillHashMap(arr);
    const resPairs = [];

    for (let i = 0; i < arr.length; ++i) {
        let remElem = sum - arr[i];
        let hs = elemCheck[remElem];
        if (isValid(i, hs)) {
            resPairs.push([arr[i], remElem])
        }
    }
    return resPairs;
}
//console.log(twoSum([1, 1, 4, 6, 9, 3], 7));
//________________________________________________________________________________________
/*16. Max Profit
Given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit.
*/
const findMаxSell = (prices, low) => {
    //find max price in prices
    let maxIndex = low; ////we have to remember index of max value; index will be enough since we always have array
    for (let index = low + 1; index < prices.length; ++index) {
        if (prices[index] > prices[maxIndex]) {
            maxIndex = index;
        }
    }
    return maxIndex;
}

const findMinBuy = (prices, low, hi) => {
    let minBuy = low;
    for (let i = low + 1; i < hi; ++i) {
        if ([prices[i]] < prices[minBuy]) {
            minBuy = i;
        }
    }
    return minBuy;
}

const findProfit = (prices) => {
    let i = 0;
    let maxSell = 0;
    let minBuy = 0;
    let Profit = 0;
    while (i < prices.length) {
        let maxSell2 = findMаxSell(prices, i);
        let minBuy2 = findMinBuy(prices, i, maxSell2);
        let profit2 = prices[maxSell2] - prices[minBuy2];
        if (Profit < profit2) {
            Profit = profit2;
            maxSell = maxSell2;
            minBuy = minBuy2;
        }
        i = maxSell + 1;
    }
    return [minBuy, maxSell];
}
//console.log(findProfit([3, 6, 1, 5]));
//________________________________________________________________________________________
/*17. Fibonacci
Implement a function that returns the fibonacci number at a given index.
*/
// 17.1. A simple method that is a direct recursive implementation mathematical recurrence relation
//Time Complexity: T(n) = T(n-1) + T(n-2) - exponential
const fibbo = (arg) => {
    if (arg < 0) {
        console.log("number cannot be negative")
    }
    if (arg <= 1) {
        return arg;
    }

    return fibbo(arg - 1) + fibbo(arg - 2)
}
//console.log(fibbo(9));

// 17.2. Dynamic Programming - storing the Fibonacci numbers calculated so far
const fibboDp = (numb) => {
    if (numb < 0) {
        console.log("number cannot be negative")
    }
    if (numb <= 1) {
        return numb;
    }

    let fibboArray = [0,1];
    let i = 0;
    while (i++ <= numb) {
        fibboArray.push(0);
    }
    for (i = 2; i <= numb; i++) {
        fibboArray[i] = fibboArray[i - 1] + fibboArray[i - 2]
    }
    return fibboArray[numb]
}
//console.log(fibboDp(9));

// 17.3 Space optimaze method 2
// Store the previous two numbers only because that is all we need to get the next Fibonacci number
const fibboSpace = (n) => {
    let a = 0;
    let b = 1;
    let c;
    if (n < 0) {
        console.log("number cannot be negative")
    }
    if (n <= 1) {
        return n;
    }
    for (let i = 2; i<=n; i++){
            c = a+b;
            a = b;
            b =c;
    }
    return b;
}
//console.log(fibboSpace(9));