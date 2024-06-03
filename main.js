
// let x = 250 
// create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 % 

let x = 250
let zakat = 0.025
console.log(x * 0.025)


// 1

[ 1,7 , 9 , 45] // ,

["Str" , "alex","moh"] // ] , 

 ['the','fox' , 'over' , 'lazy', 'dog' ] // [ , `


// What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"];
let indexBanana = fruits.indexOf("Banana"); //index is 1
let indexTomato = fruits.indexOf("Tomato"); //index is 0


/*
// 2
Create an array represents your
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

let qusai = ["mansaf","boxing","the pianest"];

/*
//// 4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let array_one = [1,4,5];
let array_two = ["t","u","g","x"];

let index_one = array_one[0];
let index_two = array_two[0];

/*
///// 5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

let lastOfArray = [1,4,5]
let lastOfArray1 = ["t","u","g","x"]
console.log(lastOfArray[lastOfArray.length-1]);
console.log(lastOfArray1[lastOfArray1.length-1]);

/*
////// 6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
let text = "";
for(i of arr4){
    text += i +", "
}
console.log("("+text+")")

/*
/////// 7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array = [0,5,7,9];
array.push(10);
array.shift();
array.shift();
array.shift();
array.unshift(1 , 3 , 4 , 6 ,8);
console.log(array);

/*
//////// 8
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr1.sort();
document.getElementById("demo2").innerHTML = arr1;