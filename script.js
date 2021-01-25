let filter = document.getElementById("filter");
let add = document.getElementById("add");
let subadd = document.getElementById("subadd");
let items = document.querySelector("#items");
let buttonList = document.querySelectorAll("button");

subadd.addEventListener("click", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  li.innerText = add.value;
  li.className = "list-group-item";
  let button = document.createElement("button");
  button.innerText = "X";
  button.className = "btn btn-danger btn-sm float-right delete";

  li.appendChild(button);
  items.appendChild(li);
  document.getElementById("holder").remove();
  add.value = "";
});

document.body.addEventListener("DOMNodeInserted", function () {
  buttonList = document.querySelectorAll("button");
  buttonList.forEach((butt) => {
    butt.addEventListener("click", () => {
      butt.parentElement.remove();
    });
  });
});

filter.addEventListener("keyup", (e) => {
  let text = e.target.value.toLowerCase();
  let lis = items.getElementsByTagName("li");
  //convert to array
  Array.from(lis).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else item.style.display = "none";
  });
});
