//Conditional Statements
/*  
    if else
    switch case
    for loop
    while loop
    Do while loop
*/

//if else

let PersonAge = 23;
if (PersonAge >= 18){   
    console.log("He is eligible");
}else{
    console.log("He is not eligible");
}

let score = 34;
if(score >= 90){
    console.log("Grade A");    
}else if(score >= 80){
    console.log("Grade B");   
}else if(score >= 70){
    console.log("Grade C");   
}else if(score >= 60){
    console.log("Grade D");  
}
else if(score >= 50){
    console.log("Grade E");    
}else{
    console.log("Fail");  
}


let userNam = "Raj";
let password ="1234";
if(userNam === "Raj" && password === "1234"){
    console.log("Access Verified");
}else{
    console.log("Not Allowed");
    
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


let day = 3;
switch(day){
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

let signal = "yellow";
switch(signal){
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready to go");
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}

//for loop

for(let num = 1;num<5;num++){
    console.log("Welcome to all");
}

let i = 1;
for(;i<10;i++){
    console.log("Dam number " + i );
}

for(let i = 1; i <= 10; i++){
  console.log("5 x " + i + " = " + (5 * i));
}

for(let i = 10; i >= 1; i--){
  console.log(i);
}

for(let i = 1; i <= 10; i++){
  console.log(i);
}

//while loop

let Dot = 5;
while (Dot < 10) {
    console.log("process on");
    Dot++;
}

let j = 1;
while(j <= 5){
  console.log(j);
  j++;
}


//Do while
let star = "*";
do {
    console.log(star);
    star++;
    
} while (star == "**");

let n = 1;
do{
  console.log(n);
  n++;
}while(n <= 3);

