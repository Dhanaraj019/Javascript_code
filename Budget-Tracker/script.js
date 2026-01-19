let descInput = document.getElementById("descInput");
let amountInput = document.getElementById("amountInput");
let typeSelect = document.getElementById("typeSelect");
let addBtn = document.getElementById("addBtn");
let transactionList = document.getElementById("transactionList");

let incomeEl = document.getElementById("income");
let expenseEl = document.getElementById("expense");
let balanceEl = document.getElementById("balance");

console.log("Budget Tracker Ready");
let totalIncome = 0;
let totalExpense = 0;
function addTransaction(desc, amount, type) {
  let li = document.createElement("li");
  amount = Number(amount);

  let spanText = document.createElement("span");
  let spanAmount = document.createElement("span");
  let delBtn = document.createElement("button");

  if (type === "income") {
    spanText.innerText = desc;
    spanAmount.innerText = ` +${amount}`;
    spanAmount.style.color = "green";
    totalIncome += amount;
  } else {
    spanText.innerText = desc;
    spanAmount.innerText = ` -${amount}`;
    spanAmount.style.color = "red";
    totalExpense += amount;
  }

  delBtn.innerText = "❌";
  delBtn.className = "del-btn";

  li.appendChild(spanText);
  li.appendChild(spanAmount);
  li.appendChild(delBtn);

  transactionList.appendChild(li);

  updateSummary();
}

function updateSummary() {
  incomeEl.innerText = totalIncome;
  expenseEl.innerText = totalExpense;
  balanceEl.innerText = totalIncome - totalExpense;
}
addBtn.addEventListener("click", function () {
  let desc = descInput.value;
  let amount = amountInput.value;
  let type = typeSelect.value;
  if (desc === "" || amount === "") {
    alert("Please fill all fields");
    return;
  }
  addTransaction(desc, amount, type);
  descInput.value = "";
  amountInput.value = "";
});
transactionList.addEventListener("click", function (event) {
  if (event.target.classList.contains("del-btn")) {
    let li = event.target.parentElement;
    let amountText = li.children[1].innerText;
    let amount = Number(amountText.replace("+", "").replace("-", ""));
    if (amountText.includes("+")) {
      totalIncome -= amount;
    } else {
      totalExpense -= amount;
    }
    li.remove();
    updateSummary();
  }
});