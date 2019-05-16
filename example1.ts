//define types
//both side should match with the data type you defined
//you can add optional data type by using `|`

const arrayExample = [1, 3, 4, 5];
// or like below:
// const arrayExample: number[] = [1, 3, 4, 5]; 

let example1: boolean | number = 35; 

let example2 = arrayExample.reduce((num1, num2) => num1 + num2);//return num1 + num2

let example3 = 'Hello World';

let example4: undefined = undefined;

let example5: null = null;