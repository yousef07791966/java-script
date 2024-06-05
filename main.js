
// let x = 250 
// create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 % 

let x = 250 ;
let zakat = 0.025 ;
console.log(x * zakat)  ;


// 1

// [ 1,7 , 9 , 45] // ,

// ["Str" , "alex","moh"] // ] , 

//  ['the','fox' , 'over' , 'lazy', 'dog' ] // [ , `


// What the index of "Banana","Tomato"
let fruits = ["Tomato","Banana","Watermelon"];
console.log( `heloo ${fruits[1]} `) ; //index is 1

console.log( `heloo ${fruits[0]} `) ;//index is 0


/*
// 2
Create an array represents your
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

let yousef = ["mansaph","mansaph" , "runing", "runing","runing" ,"action","action" ];

/*
//// 4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let array_one = [1,4,5];
let array_two = ["t","u","g","x"];

console.log( ` ${array_one[0]} `) ;
console.log( ` ${array_two[0]} `) ;

/*
///// 5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

let last = [1,4,5] ;
let last1 = ["t","u","g","x"] ;
console.log(last[last.length-1]);
console.log(last1[last1.length-1]);

/*
////// 6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
let arr =  [ 0,5,7,9 ] ;
console.log(arr) ;
arr.push(10) ;
console.log(arr) ;

arr.shift(0) ;
console.log(arr) ;

arr.shift(5) ;
console.log(arr) ;

arr.shift(7) ;
console.log(arr) ;

arr.unshift(1,3,4,6,8)
console.log(arr) ;

// var array = [0,5,7,9]; not my selution
// array.push(10);
// array.shift();
// array.pop();
// array.shift();
// array.unshift(1 , 3 , 4 , 6 ,8);
// console.log(array);
/*
/////// 7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, -7, 3.5];

array2.push(9); //We use push to add a spicific element to the end of array.
console.log(array2);

array2.unshift(-4); // We use unshift to add a spicific element to the beginning of array.
console.log(array2);

array2.shift(); // We use shift to remove the first element in array.
console.log(array2);

array2.pop(); // We use pop to remove the last element in array
console.log(array2);

/*
//////// 8
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arr1.sort((a, b) => a - b);  
console.log(arr1);
