// variable
var name1 ="Hai Dhanaraj";
var mes1= "welcome" +name1+"college";
let name2 ="Ramkumar";
let mes2 ="Kongunadu "+name2+" student";
const name3 = "raj";
console.log(name3);
//alert(mes1);
console.log(mes1);



// Datatypes
let Name = "Raj";
let age = 33;
let isCorrect = true;
let Normal;
let troble = null;
console.log(typeof Name);
console.log(typeof age);
console.log(typeof isCorrect);
console.log(typeof Normal);
console.log(Normal);
console.log(typeof troble);


// Object
let person = {
    Name : "Thalapathy",
    age : 22,
    isCorrect : true,
    lists : {
        balls: "football",
        Bats:"Cricket"
    }
}
console.log(person.lists.Bats);


// Arrays
let post = ["Red","Blue","Black"];
post[3]=null
post[2]="yellow";
console.log(post);


//Functions
function userData() {
    let User = "Ram";
    let College ="Kongunadu "+User+" student";
    console.log(College);
}
userData();
// function addition
function add(number1,number2){
    let value = number1+number2;
    console.log(value);
}
add(200,300)
// function Subtraction
function sub(number1,number2){
    let value = number1-number2;
    console.log(value);
}
sub(200,300)
// function Multiple
function mul(number1,number2){
    let value = number1*number2;
    console.log(value);
}
mul(200,300)
// function divition
function div(number1,number2){
    let value = number1/number2;
    console.log(value);
}
div(200,300)

// Operators
// Assignment Opertor
// Arithmetic Operator
// Comparison Operator
// Logical Operator
// Bitwise Operator

// 1.Assignment operator
 let x=5;
 x+=5;
 console.log(x);
// Just assign the value to the variable

// 2.Arithmetic Operator
let m = 60;
let a = 40+50;
let b = 40-50;
let c = 40/50;
let d = 40%50;
let e = 40*50;
let f = 40**50;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(++m);
console.log(m++);
console.log(--m);
console.log(m--);

// Comparison 
console.log(4<5);
console.log(5>10);
console.log(5>10);
console.log(5>10);
console.log(5>10);

//Time game

let time = new Date().getHours();
console.log(time);

// Equality operator
let R1 = 100;
let R2 = 200;
console.log(R1 === R2);
console.log(R1 !== R2);
console.log(R1 <= R2);
console.log(R1 >= R2);
console.log(R1 > R2);
console.log(R1 < R2);

//Ternary Operator

let test = 20;
let target = test>18?"eligible":"noteligible";
console.log(target);

//Logical operator
let logiNum = 4000;
let logiNum1 = 5000;
console.log(logiNum && logiNum1);
console.log(logiNum || logiNum1);
console.log(!logiNum);

//Conditional Statements
/*  
    if else
    switch case
    for loop
    while loop
    Do while loop
*/

//if else

let PersonAge = 44;
if (PersonAge >= 18){
    console.log("He is eligible");
}else{
    console.log("He is not eligible");
}

//switch case
let Grade = d;
switch (Grade) {
    case a:
        console.log("Excellent mark")
        break;
    case b:
        console.log("Very good");
        break;
    case c:
        console.log("good");
        break;
    case d:
        console.log("Poor");
        break;
    default:
        console.log("Absent");
        break;
}

//for loop

for(let num = 1;num<5;num++){
    console.log("Welcome to all");
}

let i = 1;
for(;i<10;i++){
    console.log("Dam number " + i );
}

//while loop

let Dot = 5;
while (Dot < 10) {
    console.log("process on");
    Dot++;
}

//Do while
let star = "*";
do {
    console.log(star);
    star++;
    
} while (star == "**");

