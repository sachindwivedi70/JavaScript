//Create a new list item <li>new task</li> and add it do the end of a <ul> //
let ul = document.querySelector("ul");
let li = document.querySelector("li");
li.textContent="new trask";
ul.appendChild(li);