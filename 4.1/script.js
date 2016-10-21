/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks
var numOfTrials = 10;
var arr1 = [];

//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'

for(var i = 0; i<numOfTrials; i++){
    var result = Math.random()*100;
    var resultRound = Math.round(result);
    arr1.push(resultRound);
}
console.log('There are ' + arr1.length + ' elements in the array1 : ' + arr1);

//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

var shifted = arr1.shift(); 

console.log('There are ' + arr1.length + ' elements in the array1 : ' + arr1);

//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

var popped = arr1.pop(); 

console.log('There are ' + arr1.length + ' elements in the array1 : ' + arr1);

//Question: how many elements does arr1 have at this moment?


//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?

//First, iterate over `arr1` with `array.forEach()`. Then for each value in `arr1`, add it to the beginning of `arr2` with `arr2.unshift()`

var arr2 = [];


function logArrayElements(element, index, array) {
	    var newNumber = element;
    arr2.unshift(newNumber);
};

arr1.forEach(logArrayElements);

console.log('There are ' + arr2.length + ' elements in the array2 : ' + arr2);




//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var arr3 = arr1.filter(function(el){
    //your code here
});
console.log(arr3);