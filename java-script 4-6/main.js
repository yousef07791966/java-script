/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

function yousef(num1,num2){
if (num1>num2)
return (num1)
else
return (num2)
}
console.log(yousef(4,5))

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
of product of three numbers. Display an alert box with the 
specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

let num11 = 3;
let num22 = -7;
let num33 = 2;

let product = num11 * num22 * num33;

if (product > 0) {
    alert("The sign is +");
} else if (product < 0) {
    alert("The sign is -");
} else {
    alert("The sign is 0");
}


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : 4, 8, 1 
Output : 4, 8, 1 */
/******* Start Your Code *********/
var num1 = 4;
var num2 = 8;
var num3 = 1;

if (num1 >= num2) {
if (num2 >= num3) alert(`${num1} ${num2} ${num3}`);

else if (num1 >= num3) {
    alert(`${num1} ${num3} ${num2}`);
}
} else if (num2 >= num1) {
if (num1 >= num3) alert(`${num2} ${num1} ${num3}`);

else if (num2 >= num3) {
    alert(`${num2} ${num3} ${num1}`);
}
} else if (num3 >= num1) { 
if (num1 >= num2) alert(`${num3} ${num1} ${num2}`);

else if (num2 >= num1) {
    alert(`${num3} ${num2} ${num1}`);
}
}

 /******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

function largest(a, b ,c ,d ,f ){

    
    if (a > b && a > c && a > d && a > f){
        alert(a);
    } else if (b>a && b > c && b > d && b > f) {
        alert(b);
    } else if (c > a && c > b && c > d && c > f) {
        alert(c);
    } else if (d > a && d > c && d > b && d > f) {
        alert(d);
    } else {
        alert(f);
    } 

}

largest(-5, -2, -6, 0, -1);

 /******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y,
 otherwise alert "Goodbye".*/

/******* Start Your Code *********/

function hello(x,y){
    if(x>y){
        alert("hello world ");
    }else {
        alert("Goodby");
    }

}

hello(3,7);

 /******* End Your Code ********* */