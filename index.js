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

