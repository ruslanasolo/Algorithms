// test('palindrom', () =>{
//     //
// })

/*
isPalindrom = function(arg){
let i =0;
//let argLen = Math.floor(arg.lenght/2);
//arg = arg.toLowerCase();
console.log(arg.length);

    for (;i < arg.length/2; i++){
        var leftChar = arg[i];
        var rightChar = arg[arg.length-1 - i];
        if (leftChar !== rightChar) {
            return false;
        }
    }
    return true;
}
result = isPalindrom("abBat");
console.log(result)

var str="abcdf";
console.log(str[0] !== str[3]);
*/

//  ----  ALGORITHMS  ----  \\

//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function(arr) {
    const breadcrumbs = {};
    const result = [arr[0]]; //create a new array to push a result 

    for (let i=1; i <arr.length; i++){
      if (!breadcrumbs[arr[i]]){ //constant lookup
        result.push(arr[i]); //constant
        breadcrumbs[arr[i]] = true;
      }
    }
    
    return result.sort((a, b) => a - b);
}
//console.log(uniqSort([4,2,1,2,3,2,2,2])); // => [2,3,4]

////////////
///Good solution ---->

const optSort = function (arr){
    arr.sort((a, b) => a - b);
    const result = [arr[0]]; 

    for (let i=1; i < arr.length; i++){
        if (arr[i] !== result[result.length-1])
            result.push(arr[i]);
        
    }
    return result
}
console.log('opimal sort', optSort([4,2,1,2,3,2,2,2]));

////
let arr = [4,2,1,2,3,2,2,2]

let optSort1 = () => {
    let sorted = arr.sort();
    let result = [];

    for (let i=0; i < sorted.length-1; i++){
        if (sorted[i] !== sorted[i+1]){
            result.push(sorted[i]);
        }
    }

    return result

}
//optSort1 (arr)
//console.log(optSort);

// ----- TASK ---- // 
 const times10 = (n) => (n * 10);

 console.log('times10 returns', times10(9))

 const cache = {}; //use the object to cache the results of times10 function

 //1. create function that checks if the value for n has been calculated before
 //2. if the value for n has not been calculated, calculate and save the result in the cache object 

 



// // Task 3: Clean up your global scope by moving your cache inside your function.
// // protip: Use a closure to return a function that you can call later.

// const memoizedClosureTimes10 = () => {

// };

// const memoClosureTimes10 = memoizedClosureTimes10();
// console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
// try {
//   console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
//   console.log('Task 3 cached value:', memoClosureTimes10(9));	// cached
// } catch(e) {
//   console.error('Task 3:', e);
// }

