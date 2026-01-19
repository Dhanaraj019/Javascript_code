console.log("Js Connected Successfully");
console.log(document);
console.log(document.title);

let heading = document.getElementById("title");
console.log(heading);
heading.innerText = "DOM is Working";
heading.style.color = "blue";
heading.style.backgroundColor = "Lightgray";

let para = document.getElementById("para");
console.log("InnerText :", para.innerText);
console.log("TextContent :", para.textContent);
para.innerText = "Change inner text";
para.textContent = "Change Text conetent";

let box = document.getElementById("box");
console.log("innerHTML :", box.innerHTML);
console.log("innerText :", box.innerText);
box.innerHTML = "<h2>Inject Heading</h2><p> Content para</p>";

let img = document.getElementById("myimg");
console.log("Image in :", img.getAttribute("src"));
img.setAttribute(
  "src",
  "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg?w=385"
);
img.removeAttribute("alt");
console.log("Alt removed in the process");

let styId = document.getElementById("styleId");
styId.style.color="yellow";
styId.style.backgroundColor="green";
styId.style.padding="10px";
styId.style.fontSize="10px";
styId.style.display="none";
styId.style.display="block";

let par = document.getElementById("classPara");
par.classList.add("highlight");
par.classList.remove("highlight");
par.classList.toggle("highlight");

let btn1 = document.getElementById("btn1");
let meg1 = document.getElementById("meg1");
btn1.addEventListener("click",function () {
  meg1.innerText="Para to Click here";
  meg1.style.color="red";
});

let btn2 = document.getElementById("btn2");
let meg2 = document.getElementById("meg2");
let nameInput = document.getElementById("nameInput");
btn2.addEventListener("click", function () {
  meg2.innerText=nameInput.value;
  nameInput.value="";
});

let btn3 = document.getElementById("btn3");
let container = document.getElementById("container");
btn3.addEventListener("click",function () {
  let p = document.createElement("p");
p.innerText="This paragraph is created by the JavaScript";
container.appendChild(p);
});

let ul = document.createElement("ul");
container.appendChild(ul);
btn3.addEventListener("click",function () {
  let li = document.createElement("li");
  li.innerText= "List items";
  ul.appendChild(li);
});

let delbtn = document.getElementById("delbtn");
let par1 = document.getElementById("deleteme");
delbtn.addEventListener("click",function () {
  par1.remove();
})

let removebtn =document.getElementById("removebtn");
let list = document.getElementById("myList");
let item = document.getElementById("removeIt");
removebtn.addEventListener("click",function () {
  list.removeChild(item);
})

let buttons = document.querySelectorAll(".btn");
let eventOutput = document.getElementById("eventOutput");
buttons.forEach(function(btn) {
  btn.addEventListener("click",function (event) {
    eventOutput.innerText="You Clicked!!"+ event.target.innerText+"Event:"+event.type;
  });
});

let tasklist = document.getElementById("taskList");
let taskOutput = document.getElementById("taskOutput");
tasklist.addEventListener("click", function (event) {
  if(event.target.tagName === "LI"){
    taskOutput.innerText="You clicked"+event.target.innerText;
    event.target.style.backgroundColor="yellow";
  }
});

let Isinput = document.getElementById("Isinput");
let savebtn = document.getElementById("savebtn");
savebtn.addEventListener("click",function () {
  localStorage.setItem("myData",Isinput.value);
  alert("Data Saved");
});

let loadmsg = document.getElementById("Loadbtn");
let Isoutput = document.getElementById("Isoutput");
loadmsg.addEventListener("click",function (event) {
  let savedbtn = localStorage.getItem("myData");
  Isoutput.innerText=savedbtn;
});

let deletebtn = document.createElement("button");
deletebtn.innerText="Delete Data";
document.body.appendChild(deletebtn);
deletebtn.addEventListener("click",function () {
  localStorage.removeItem("myData");
  alert("Data Deleted");
});