//Functions
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


function welcome(){
  console.log("Welcome to JavaScript Learning");
}
welcome();


function add(a, b){
  console.log(a + b);
}
add(10, 20);
add(5, 15);


function square(n){
  return n * n;
}
let result = square(6);
console.log(result);


const multiply = (a,b) => a*b;
console.log(multiply(10,20));


function greet(name){
  console.log("Welcome " + name);
}
greet("Dhanaraj");
greet("Raj");


let addThree = (a,b,c) => (a+b+c);
// function addThree(a, b, c){
//   return a + b + c;
// }
console.log(addThree(2, 3, 4));
console.log(addThree(10, 20, 30));


function mult(a, b){
  return a * b;
}
console.log(mult(4, 6));
console.log(mult(10, 5));


function welcome(name = "Guest"){
  console.log("Hello " + name);
}
welcome("KD");
welcome();


//Scope

//Global
let country = "Kanada";
function printCountry() {
    // return country;
    console.log(country);
}
printCountry();
console.log(country);

//Local
function numberDisply() {
    let num = 100;
    console.log(num);
}
numberDisply();
console.log(num);

//Block
if (true){
  let age = 25;
  console.log(age);
}
console.log(age);


if(true){
  var a = 10;
  let b = 20;
}
console.log(a);
console.log(b);