///////////////////////////////////////// box 1

/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

// function yousef(num1,num2){
// if (num1>num2)
// return (num1)
// else
// return (num2)
// }
// console.log(yousef(4,5))

// //  /******* End Your Code ********* */

// // /* 2. Write a JavaScript conditional statement to find the sign
// // of product of three numbers. Display an alert box with the 
// // specified sign. Go to the editor 
// // Sample numbers : 3, -7, 2 
// // Output : The sign is - */
// // /******* Start Your Code *********/

// let num11 = 3;
// let num22 = -7;
// let num33 = 2;

// let product = num11 * num22 * num33;

// if (product > 0) {
//     alert("The sign is +");
// } else if (product < 0) {
//     alert("The sign is -");
// } else {
//     alert("The sign is 0");
// }


// //  /******* End Your Code ********* */

// // /* 3. Write a JavaScript conditional statement to sort three numbers. 
// // Display an alert box to show the result. Go to the editor 
// // Sample numbers : 4, 8, 1 
// // Output : 4, 8, 1 */
// // /******* Start Your Code *********/

// var num1 = 4;
// var num2 = 8;
// var num3 = 1;

// if (num1 >= num2) {
// if (num2 >= num3) alert(`${num1} ${num2} ${num3}`);

// else if (num1 >= num3) {
//     alert(`${num1} ${num3} ${num2}`);
// }
// } else if (num2 >= num1) {
// if (num1 >= num3) alert(`${num2} ${num1} ${num3}`);

// else if (num2 >= num3) {
//     alert(`${num2} ${num3} ${num1}`);
// }
// } else if (num3 >= num1) { 
// if (num1 >= num2) alert(`${num3} ${num1} ${num2}`);

// else if (num2 >= num1) {
//     alert(`${num3} ${num2} ${num1}`);
// }
// }

// //  /******* End Your Code ********* */

// // /*4. Write a JavaScript conditional statement to find the largest of five numbers. 
// // Display an alert box to show the result. Go to the editor 
// // Sample numbers : -5, -2, -6, 0, -1 
// // Output : 0 */

// // /******* Start Your Code *********/

// function largest(a, b ,c ,d ,f ){

    
//     if (a > b && a > c && a > d && a > f){
//         alert(a);
//     } else if (b>a && b > c && b > d && b > f) {
//         alert(b);
//     } else if (c > a && c > b && c > d && c > f) {
//         alert(c);
//     } else if (d > a && d > c && d > b && d > f) {
//         alert(d);
//     } else {
//         alert(f);
//     } 

// }

// largest(-5, -2, -6, 0, -1);

// //  /******* End Your Code ********* */

// // /* 5.Write the if statement to display "Hello World" if x is greater than y,
// //  otherwise alert "Goodbye".*/

// // /******* Start Your Code *********/

// function hello(x,y){
//     if(x>y){
//         alert("hello world ");
//     }else {
//         alert("Goodby");
//     }

// }

// hello(5,7);

//  /******* End Your Code ********* */

/////////////////////////////////////////////////////////// box 2

/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/


// i = 59 
// if (i >= 90) {
//     console.log("A");
// } else if (i >= 80) {
//     console.log("B");
// } else if (i >= 70) {
//     console.log("C");
// } else if (i >= 60) {
//     console.log("D");
// } else if (i >= 50) {
//     console.log("E");
// } else {
//     console.log("Fail");
// }

////////////////////////////////////////////////////////// box 3 

// 1. Write a JS code to print numbers from 1 to 10
// for (let i = 1; i <= 10 ; i++){
//     console.log(i);
// }

/*2. Write a JS code to print Even numbers in arr :
var arr = [13,23,12,45,22,48,66,100]
*/
// let arr = [13, 23, 12, 45, 22, 48, 66, 100];

// let even = [];
// for (let num of arr) {
// if (num % 2 == 0) {
//     even.push(num);  }
// }
// console.log(even);

// 3. Write a JS code to print a pattern using for loop

// let arr2 = [];
// for (let i = 1; i <= 8; i++) {
//   arr2.push(i);
//   console.log(arr2);
// }

//   Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
// let x = "don’t know why"

// let x = "don’t know why";

// if (x.includes("y")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }


//////////////////////////////////////////////////////////////  box 4 

//////////////////////////////////////////////////////////////  box 4 

//////////////////////////////////////////////////////////////  box 4 

//////////////////////////////////////////////////////////////  box 4 





/**
 * 1
 * Write a function named tellFortune that:
 * takes 4 arguments: number of children,
 * partner's name, geographic location, job title.
 * outputs your fortune to the screen like so:
 * "You will be a X in Y, and married to Z with N kids."
 *
//    @format//
 */

// function tellFortune(
//     geographic_location,
//     job_title,
//     partner_name,
//     numberOfChildren
//   ) {
//     return `You will be a ${job_title} in ${geographic_location},
// and married to ${partner_name} with ${numberOfChildren} kids.`;
//   }
  
//   console.log(tellFortune("Amman", "developer", "Emily", 3));

//   ////////////////////////////////////////////////////////////////////////////////////////////////////
  
//   /*
//   2
//   Write a function named calculateDogAge that:
//   takes 1 argument: your puppy's age.
//   calculates your dog's age based on the conversion
//   rate of 1 human year to 7 dog years.
  
//   outputs the result to the screen like so:
//   "Your doggie is NN years old in dog years!"
//   */
  
//   function calculateDogAge(human_age) {
//     dog_age = human_age * 7;
//     return `Your doggie is ${dog_age} years old in dog years!`;
//   }
  
//   console.log(calculateDogAge(5));
//   ////////////////////////////////////////////////////////////////////////////////////////////////////////
  
//   /*
//   3
//   Write a function named calculateSupply that:
//   takes 2 arguments: age, amount per day.
//   calculates the amount consumed for rest of the life (based on a constant max age 100).
//   outputs the result to the screen like so:
//   "You will need NN to last you until the ripe old age of X"
  
//   Ex: calculateSupply(30, 3);
//   => 'You will need 76650 cups of tea to last you until the ripe old age of 100;
//   */
  
//   function calculateSupply(age, amount_per_day) {
//     let until_old_age = 100 - age;
//     let days = 365 * until_old_age;
//     let cups = days * amount_per_day;
//     return `You will need ${cups} cups of tea to last you until the ripe old age of 100`;
//   }
//   console.log(calculateSupply(26, 2));
//   ////////////////////////////////////////////////////////////////////////////////////////////////////////
  
//   /*
//   4
//   Write a function called greet that:
//   takes 1 argument: name.
//   and it will return hello + name
  
//   Ex: greet("Adam")
//   => "Hello Adam"
//   */
  
//   function greet(name) {
//     return `Hellow ${name}`;
//   }
//   console.log(greet("yousef"));
//   ////////////////////////////////////////////////////////////////////////////////////////////////////////
  
//   /*
//   5
//   what is the error:
//   function double(cat) {   //the error is the x not defined and it must be as a parameter (cat)
//     return 2 * x;
//   }
  
//   function double(7) {   //the error is the parameter must be a name, and in this case we can use x=7
//     return 2 * 7;
//   }
  
//   function double('7') { //the error is the parameter must be a name, and in this case we can use x='7'
//     return 2 * 'x';
//   }
//   */
  
  // the right solution:
  
//   function double(cat) {
//     return 2 * cat;
//   }
  
//   function double(x = 7) {
//     return 2 * x;
//   }
  
//   function double(x = "7") {
//     return 2 * x;
//   }
  
//   ////////////////////////////////////////////////////////////////////////////////////////////////////////
  
//   /*
//   6
//   fix these functions:             
//   func double1(x {    // must write function keyword in a correct way and add bracket after the parameter.
//     return 2 * x ;
//   }
  
//   functiondouble2 x)   // must make a space between function keyword and the name of the function, add bracket 
//                         before the parameter, and curly brackets after function name.
//   return 2 * x;
//   }
  
//   function (x) double3 {  // must write finction name befor the parameter and add curly brackets in the end.
//     return 2 * x;
  
//   */
  
  // the right solution:
  
//   function double1(x) {
//     return 2 * x;
//   }
  
//   function double2(x) {
//     return 2 * x;
//   }
  
//   function double3(x) {
//     return 2 * x;
//   }
//   /////////////////////////////////////////////////////////////////////////////////
  
//   /*
//   7
//   Write a function called cube that:
//   accept 1 parameter and calculate the cube of this number
  
//   Ex: cube(4)
//   => 64
//   */
  
//   function cube(x) {
//     return x ** 3;
//   }
  
//   console.log(cube(4));
//   ////////////////////////////////////////////////////////////////////////////////////
  
//   /*
//   8
//   Write a function called multiply that:
//   accept 2 parameters and calculate the multiply of these 2 numbers
  
//   Ex: multiply(3,4)
//   => 12
//   Ex: multiply(5,4)
//   => 20
//   */
  
//   function multiply(num1, num2) {
//     return num1 * num2;
//   }
  
//   console.log(multiply(2, 5));
//   ///////////////////////////////////////////////////////////////////////////
  
//   /*
//   9
//   Write a function called canIGetADrivingLicense that:
//   accept 1 parameter represent the age
//   and if the age greater than or equal to 20 return "yes you can"
//   otherwise return "please come back after X years to get one"
  
//   Ex: canIGetADrivingLicense(21)
//   => "yes you can"
  
//   Ex: canIGetADrivingLicense(17)
//   => "please come back after 3 years to get one"
  
//   Ex: canIGetADrivingLicense(20)
//   => "yes you can"
  
//   */
  
//   function canIGetADrivingLicense(age) {
//     if (age >= 20) {
//       return `Can i get a license? Yes you can`;
//     } else {
//       let left = 20 - age;
//       return `Can i get a license? please come back after ${left} years to get one`;
//     }
//   }
  
//   console.log(canIGetADrivingLicense(15));
//   //////////////////////////////////////////////////////////////////////
  
//   /*
//   10
//   Write a function called sameLength
//   that accepts two strings as arguments,
//   and returns true if those strings have the same length, and false otherwise.
  
//   **hint: how we can know string length   Ex: : "tree".length   => 4
  
//   Ex: sameLength("tree","clue")
//   => true
  
//   Ex: sameLength("tree","car")
//   => false
//   */
   // عدد الاحرف متساوي  لا 
//   function sameLength(word1, word2) {
//     if (word1.length == word2.length) {
//       return "True";
//     } else {
//       return "False";
//     }
//   }
  
//   console.log(sameLength("OMAr", "Yahia"));
//   //////////////////////////////////////////////////////////////////////////
  
//   /*
//   11
//   Write a function called largerNubmer
//   that accept two numbers as arguments,
//   and return the first larger numbers
  
//   Ex: largerNubmer(5,6)
//   => 6
  
//   Ex: largerNubmer(5,3)
//   => 5
//   */
  
//   function largerNubmer(num1, num2) {
//     if (num1 > num2) {
//       return num1;
//     } else {
//       return num2;
//     }
//   }
  
//   console.log(largerNubmer(3, 6));
//   /////////////////////////////////////////////////////////////////////
  
//   /*
//   12
//   Write a function called smallerNubmer
//   that accept three numbers as arguments,
//   and return the first smaller number
  
//   Ex: smallerNubmer(8,6,7)
//   => 6
  
//   Ex: smallerNubmer(5,99,34)
//   => 5
  
//   Ex: smallerNubmer(5,99,3)
//   => 3
  
//   Ex: smallerNubmer(5,3,3)
//   => 3
  
//   */
  
//   function smallerNubmer(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//       return num1;
//     } else if (num2 < num1 && num2 < num3) {
//       return num2;
//     } else {
//       return num3;
//     }
//   }
//   console.log(smallerNubmer(-4, 6, -1));
//   ///////////////////////////////////////////////////////////////////
  
//   /*
//   13
//   Write a function called shorterString
//   that accept five string as an arguments,
//   and return the first shorter string
  
//   Ex: shorterString("air","school","car","by","github")
//   => by
  
//   Ex: shorterString("air","tr","car","by","github")
//   => tr
  
//   Ex: shorterString("by","tr","car","air","github")
//   => by
  
//   Ex: shorterString("air","by","car","school","github")
//   => by
  
//   Ex: shorterString("air","tr","by","car","github")
//   => by
  
//   Ex: shorterString("air","tr","car","github","by")
//   => by
  
//   */
                        //   copy put i understand hem

//   function shorterString(str1, str2, str3, str4, str5) {
//     if (
//       str1.length < str2.length &&
//       str1.length < str3.length &&
//       str1.length < str4.length &&
//       str1.length < str5.length
//     ) {
//       return str1;
//     } else if (
//       str2.length < str1.length &&
//       str2.length < str3.length &&
//       str2.length < str4.length &&
//       str2.length < str5.length
//     ) {
//       return str2;
//     } else if (
//       str3.length < str1.length &&
//       str3.length < str2.length &&
//       str3.length < str4.length &&
//       str3.length < str5.length
//     ) {
//       return str3;
//     } else if (
//       str4.length < str1.length &&
//       str4.length < str2.length &&
//       str4.length < str3.length &&
//       str4.length < str5.length
//     ) {
//       return str4;
//     } else {
//       return str5;
//     }
//   }
  
//   console.log(shorterString("ee", "rrr", "t", "uuuu", "ii"));
//   ////////////////////////////////////////////////////////////////////
  
//   /*
//   14      ?????????????????????????

//   Write a function called longerString
//   that accept four string as an arguments,
//   and return the first longer string
  
//   Ex: longerString("air","school","car","github")
//   => school
  
//   Ex: longerString("air","schoo","car","github")
//   => github
  
//   try all the cases (change the order of the longestString)
//   */
  
//   function longerString(str1, str2, str3, str4) {
//     let arr = [str1, str2, str3, str4];
//     let str = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i].length > str.length) {
//         str = arr[i];
//       }
//     }
  
//     return str;
//   }
  
//   console.log(longerString("rrrrr", "tttt", "gggggggg", "ww"));
//   ///////////////////////////////////////////////////////////////////////////////
  
//   /*
//   15
//   Write a function called isEven
//   that accept 1 argument as a number,
//   and return true if this number is even
//   and false if this number is odd
  
//   Ex: isEven(1)
//   => false
//   Ex: isEven(2)
//   => true
//   */
  
//   function isEven(number) {
//     if (number == 0) {
//       return "This is Zero";
//     } else if (number % 2 == 0) {
//       return "True";
//     } else {
//       return "False";
//     }
//   }
  
//   console.log(isEven(9));
//   //////////////////////////////////////////////////////////
  
//   /*
//   16
//   Write a function called isOdd
//   that accept 1 argument as a number,
//   and return true if this number is Odd
//   and false if this number is Even
  
//   Ex: isOdd(4)
//   => false
//   Ex: isOdd(5)
//   => true
  
//   */
  
//   function isOdd(number) {
//     if (number == 0) {
//       return "This is Zero";
//     } else if (number % 2 != 0) {
//       return "True";
//     } else {
//       return "False";
//     }
//   }
  
//   console.log(isOdd(9));
//   ////////////////////////////////////////////////////////////////////
//   /*
//   17
//   Write a function called positive
//   that accept 1 argument as a number,
//   and return the positive version of the number passed
  
//   Ex: positive(4)
//   => 4
//   Ex: positive(-5)
//   => 5
//   */
  
//   function positive(num1) {
//     if (num1 < 0) {
//       num1 = num1 * -1;
//       return num1;
//     } else {
//       return num1;
//     }
//   }
  
//   console.log(positive(6));
//   ///////////////////////////////////////////////////////////////
  
//   /*
//   18
//   Write a function called fullName
//   that accept two parameters, firstName and lastName,
//   and returns the firstName and lastName concatenated
//   together with a space in between.
  
//   Ex: fullName("Adam","McCallen")
//   => "Adam McCallen"
//   Ex: fullName("Alex", "Mercer")
//   => "Alex Mercer"
//   */
  
//   function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
//   }
  
//   console.log(fullName("yousef", "kh"));
//   ////////////////////////////////////////////////////////////
  
//   /*
//   19
//   Write a function called average
//   that takes five numbers as inputs
//   and returns the average of those numbers.
  
//   Ex: average(1,2,3,4,5)
//   => 3
  
//   Ex: average(5,7,9,3,5)
//   => 5.8
  
//   */
  
//   function average(num1, num2, num3, num4, num5) {
//     return (num1 + num2 + num3 + num4 + num5)  / 5  ;
//   }
  
//   console.log(average(5, 7, 9, 3, 5));
//   ////////////////////////////////////////////////////////////////
  
//   /*
//   20
//   Write a function called randomNumber
//   that didnt takes any parameter
//   and returns a random number between 0-1
//   ** hint: you can seacrh using MDN
  
//   Ex: randomNumber()
//   => 0.2278
  
//   Ex: randomNumber()
//   => 0.475
//   */
  
//   function randomNumber() {
//     return Math.random();
//   }
  
//   console.log(randomNumber());
//   ///////////////////////////////////////////////////////////////
  
//   /*
//   21
//   Write a function called randomBetweenNumbers
//   that takes 2 parameters
//   and returns a random number between them
//   ** hint: you can seacrh using MDN
  
//   Ex: randomBetweenNumbers(1,8)
//   => 7.5412
  
//   Ex: randomBetweenNumbers(3,100)
//   => 23
  
//   */
  
//   function randomBetweenNumbers(min, max) {
//     return Math.random() * (max - min) + min;
//   }
  
//   console.log(randomBetweenNumbers(3, 20));
//   ////////////////////////////////////////////////////////////////
  /*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/


// function scoreInUniversty(score) {
//   if (score < 50 )
//     return 'F';
//   else if (score >= 50 && score <= 69)
//     return 'D';
//   else if (score >= 70 && score <= 84)
//     return 'C';
//   else if (score >= 85 && score <= 94)
//     return 'B';
//   else if (score >= 95 && score <= 100)
//     return 'A';
// }
// console.log (scoreInUniversty(57));
// console.log (scoreInUniversty(98));

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

// function counter() {
//   let number = 0;
//   function counterFCN() { number++; 
//     return number;
//    }
//   return counterFCN;
// }
// let x = counter(); 
// console.log(x()); 
// console.log(x());  
// console.log(x());
// console.log(x());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/


// let number = 0; 
// function counter() { number++ ; 
//   return number; 
// }
// function resetCounter() {
//   let countBeforeReset =  number ;
//   number = 0; 
//   return `${countBeforeReset} and the counter reset now`;
// }

// console.log(counter ()); 
// console.log(counter ());  
// console.log(resetCounter());
// console.log(counter ());