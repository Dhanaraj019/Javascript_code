let addTask = document.getElementById("Addtask");
let addtaskBtn = document.getElementById("addtaskbtn");
let addList =document.getElementById("addList");
console.log("To-Do-List");
addtaskBtn.addEventListener("click",function () {
    let taskData = addTask.value;
    if (taskData === "") {
        alert("Please Enter the value !!");
        return;
    }
    let li = document.createElement("li");
    // li.innerText=taskData;
    let span = document.createElement("span");
    span.innerText=addTask.value;
    let delbtn = document.createElement("button");
    delbtn.innerText="  ❌  ";
    delbtn.className="delt-btn";
    li.appendChild(span);
    li.appendChild(delbtn);
    addList.appendChild(li);
    addTask.value="";
});
addList.addEventListener("click",function (event) {
    if(event.target.classList.contains("delt-btn")){
        let li = event.target.parentElement;
        li.remove();
    }
     if(event.target.tagName === "SPAN") {
    event.target.classList.toggle("completed");
  }
});