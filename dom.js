// var items = document.getElementsByClassName("list-group-item");

// items[2].style.backgroundColor = "green";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }

// var li = document.getElementsByTagName("li");

// var liClass = document.getElementsByClassName("list5");

// liClass[0].style.backgroundColor = "blue";

// li[4].style.backgroundColor = "#f4f4f4";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";
// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.display = "none";

// var items = document.querySelectorAll(".list-group-item");
// items[1].style.color = "green";

// var odd = document.querySelectorAll("li:nth-child(odd)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
// }

//TRAVERSING THE DOM //

// var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);

// console.log(itemList.children);

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// createElement

// Create a div
var newDiv = document.createElement("div");

// Add class
newDiv.className = "hello";

// Add Id
newDiv.id = "hello1";

// Add attribute
newDiv.setAttribute("title", "Hello Div");

// Create text node
var newDivText = document.createTextNode("Hello World");

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
container.insertBefore(newDiv, h1);

var newDiv1 = document.createElement("div");
var newDivText1 = document.createTextNode("Hello World");

newDiv1.appendChild(newDivText1);
var form = document.querySelector("div .list-group");

var li = document.querySelector("ul .list-group-item");

form.insertBefore(newDiv1, li);
