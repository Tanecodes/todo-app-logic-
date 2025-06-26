// this  project is to teach me more javascript logic
// ive created a todo app before but this one is going to be created in Javascript only

// setting some variables
const app = document.getElementById("app");
const body = document.body;

// styling the body element.
body.style.backgroundColor = "black";
body.style.fontFamily = "'Roboto', sans-serif";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

// creating the title(h1) and setting its styles
const title = document.createElement("h1");

title.innerText = "TODO APP";
title.style.color = "white";
title.style.fontSize = "3rem";
// appending the title to the app.
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

// appending input and confirm button to the app (div element).
app.appendChild(input);
app.appendChild(btn);

// creating an event listener for the button
// which will grab the input and create a task.

btn.addEventListener("click", function() { 
  const userInput = input.value;

  // creating an if statement for the logic.
  if(userInput.trim() !== "") {

    // setting variables to create elements.
    const task = document.createElement("div");
    const text = document.createElement("p");

    const deleteBtn = document.createElement("button");
    // creating an event listener for the delete button.
    deleteBtn.addEventListener("click", function() {
      task.remove();
    });

    // task element styles.
    task.style.display = "flex";
    task.style.flexDirection = "row";
    // paragraph element styles (task text).
    text.innerText = userInput;
    text.style.color = "white";
    // delete button styles.
    deleteBtn.innerText = "delete";

    // appending the elements created so they appear in the browser.
    task.appendChild(text);
    task.appendChild(deleteBtn);
    app.appendChild(task);

    input.value = "";
  }

});