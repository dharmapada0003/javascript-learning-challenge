// DOM properties: These are available on HTML elements through the Document Object Model (DOM).
// They let you read or modify an element's content, attributes, styles and state.

//1. textContent: Used to get or change text content.

//Ex-1
const element = document.getElementById("demo-text");

element.textContent = "Welcome to JavaScript";

console.log(element.textContent);

//2. innerText: Gets or changes the visible text of an element.

//Ex-1
const message = document.getElementById("message");

message.innerText = "Welcome to my website!";

//3. innerHTML: Used to get or change HTML content inside an element.

//Ex-1
const box = document.querySelector("#box");

box.innerHTML = `
  <h2>Welcome!</h2>
  <p>This content was added using JavaScript.</p>
`;

//4. value: Used mainly with input, textarea, and select elements.

//Ex-1
const input = document.getElementById("username");

console.log(input.value); // Rahul

input.value = "Dharmapada";

//5. id: Gets or changes an element's ID.

//Ex-1
const myBox = document.getElementsByClassName("oldBox");

myBox.id = "newBox";

console.log(myBox.id);

//6. className: Gets or changes the class of an element.

//Ex-1
const normalText = document.getElementById("text");

normalText.className = "highlight";

//7. style: Used to change inline CSS styles.

//Ex-1
const heading = document.getElementById("heading");

heading.style.color = "red";
heading.style.fontSize = "40px";
heading.style.textAlign = "center";

//8. href: Used with links to get or change the URL.

//Ex-1
const link = document.getElementById("link");

console.log(link.href);

link.href = "https://amazon.com";

//9. src: Commonly used with images, videos, and scripts.

//Ex-1
const image = document.getElementById("photo");

console.log(image.src);

image.src = "new.png";

//10. checked: Used with checkboxes and radio buttons.

//Ex-1
const checkbox = document.getElementById("agree");

console.log(checkbox.checked); // false

checkbox.checked = true;

console.log(checkbox.checked); // true

//11. disabled: Used to enable or disable form elements.

//Ex-1
const button = document.getElementById("btn");

button.disabled = true;

//12. hidden: Used to hide or show an element.

//Ex-1
const myMessage = document.getElementById("myMessage");

myMessage.hidden = true;

//13. children: Gets the child elements of an element.

//Ex-1
const parent = document.getElementById("parent");

console.log(parent.children);
console.log(parent.children.length); // 2

console.log(parent.children[0]); // first <p>

//14. parentElement: Gets the parent element.

//Ex-1
const child = document.getElementById("child");

console.log(child.parentElement);

//15. nextElementSibling: Gets the next sibling element.

//Ex-1
const first = document.getElementById("first");

console.log(first.nextElementSibling);

//16. previousElementSibling: Gets the previous sibling element.

//Ex-1
const second = document.getElementById("second");

console.log(second.previousElementSibling);

//17. classList: Used to add, remove, toggle or check CSS classes.

//Ex-1
const DemoElement = document.getElementById("demoContent");

// a. Add a class
DemoElement.classList.add("active");

console.log(DemoElement.classList);
// DOMTokenList ["myText", "active"]

// b. Check if a class exists
console.log(DemoElement.classList.contains("active"));
// true

// c. Remove a class
DemoElement.classList.remove("myText");

console.log(DemoElement.classList);
// DOMTokenList ["active"]

// d. Toggle a class
DemoElement.classList.toggle("active");

console.log(DemoElement.classList);
// DOMTokenList []

//Note:
// classList.add()       // Add class
// classList.remove()    // Remove class
// classList.contains()  // Check class
// classList.toggle()    // Add if absent, remove if present
