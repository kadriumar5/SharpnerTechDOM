// var items = document.getElementsByClassName("list-group-item");

// items[2].style.backgroundColor = "green";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }

// var li = document.getElementsByTagName("li");

// var liClass = document.getElementsByClassName("list5");

// liClass[0].style.backgroundColor = "blue";

// li[4].style.backgroundColor = "#f4f4f4";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";
var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.display = "none";

var items = document.querySelectorAll(".list-group-item");
items[1].style.color = "green";

var odd = document.querySelectorAll("li:nth-child(odd)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}
