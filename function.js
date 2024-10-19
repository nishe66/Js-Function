//1. Write a function called addNumbers that takes two numbers as parameters and returns their sum

function addNumbers(number1, number2){
   let result1 = number1 + number2;
   return result1;
}
console.log("sum of two numbers: " + addNumbers(10, 20));

// output: sum of two numbers: 30


// --------------------------------------------------------------------------------------

// 2. Write a function called sumUpToN that takes a number n and returns the sum of all numbers from 1 to n. Use a loop.

function sumUpToN(n){
  let sum = 0;
  for( let i = 1; i <= n; i++){
     sum += i;
  }
  return sum;
}
console.log("The sum of all numbers from 1 to n: " + sumUpToN(10));

// output: The sum of all numbers from 1 to n: 55
// ------------------------------------------------------------------------------------------

//3. Write a function called sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array

let array = [12, 32, 34, 56];
function sumArray(a){
    let sum1 = 0;
    for( let i = 0; i < a.length; i++){
        sum1 += a[i];
    
    }
    return sum1;

}
console.log("The sum of all the numbers in the array: " + sumArray(array));

// The sum of all the numbers in the array: 134
// ------------------------------------------------------------------------------------------


// 4. Write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the count of even numbers in the array
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 function countEvenNumbers(x){
  let count = 0;
  for( let i = 0; i < x.length; i++){
     if( x[i] % 2 === 0){
          count++;
        
    }
  }
      return count;
 }
 console.log("count of even numbers: " + countEvenNumbers(array1));

//  output:count of even numbers: 5
// -----------------------------------------------------------------------------------------

 
  // 5. Write a function stringLength that takes a string as a parameter and returns the length of the string
function stringLength(fruitsName){
    let length = fruitsName.length;
    return length;
}
console.log("The length of the string is: " + stringLength("Mango,Apple"));

// output:The length of the string is: 11


