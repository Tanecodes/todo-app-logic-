// this  project is to teach me more javascript logic
// ive created a todo app before but this one is going to be created in Javascript only

// settig some variables
const app = document.getElementById("app");
const body = document.body;

// styling the body element.
body.style.backgroundColor = "black";
body.style.fontFamily = "'Roboto', sans-serif";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

// creating the title and its styles
const title = document.createElement("h1");

title.innerText = "TODO APP";
title.style.color = "white";
title.style.fontSize = "3rem";

app.appendChild(title);

// creating an input field and a button for the user.
const input = document.createElement("input");
const btn = document.createElement("button");

// input styles
input.style.width = "200px";
input.style.height = "25px";
input.style.outline = "none";
input.placeholder = "comment in here...";
input.style.fontSize = "1rem";
input.style.fontStyle = "italic";

// button styles.
btn.innerText = "confirm";
btn.style.fontWeight = "bold";
btn.style.width = "50px"
btn.style.height = "20px";
btn.style.padding = "3px 3px";
btn.style.display = "flex";
btn.style.justifyContent = "center";
btn.style.alignItems = "center";

app.appendChild(input);
app.appendChild(btn);

// creating an event listener for the button
// which will grab the input 

btn.addEventListener("click", function() {
  
  const userInput = input.value;

  if(userInput.trim() !== "") {
    
    const task = document.createElement("p");
    task.innerText = userInput;
    task.style.color = "white";
    app.appendChild(task);
    input.value = "";
  }

});