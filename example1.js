"use strict";
//define types
//both side should match with the data type you defined
//you can add optional data type by using `|`
var arrayExample = [1, 3, 4, 5];
// or like below:
// const arrayExample: number[] = [1, 3, 4, 5]; 
var example1 = 35;
var example2 = arrayExample.reduce(function (num1, num2) { return num1 + num2; }); //return num1 + num2
var example3 = 'Hello World';
var example4 = undefined;
var example5 = null;
