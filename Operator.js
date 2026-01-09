// variable
var name1 ="Hai Dhanaraj";
var mes1= "welcome" +name1+"college";
let name2 ="Ramkumar";
let mes2 ="Kongunadu "+" "+name2+" student";
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

