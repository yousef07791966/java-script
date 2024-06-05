// /* 1. Write a JavaScript program that accept two integers and
//  * display the larger.Go to the editor */
// /******* Start Your Code *********/

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

// hello(3,7);

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