//To Create a New Element

//Ex-1
const newPara = document.createElement("p");

newPara.innerText = "This is a new paragraph!";

//1. appendChild():  appendChild() is used to add an element at the end of another element.

//Ex-1
let container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent = "New paragraph";

container.appendChild(para); //It puts the new element as the last child of the parent.

//2. prepend(): Insert at the beginning of parent's children

//Ex-1
container = document.querySelector("#container");

const anotherPara = document.createElement("p");
anotherPara.textContent = "This is paragraph 2";

container.prepend(anotherPara);

//3. append(): Insert at the end of parent's children

//Ex-1
container = document.querySelector("#container");

const btn = document.createElement("button");
btn.innerText = "Click Me!";

container.appendChild(btn);

//4. before(): before() inserts the new element before the selected element.

//Ex-1
const second = document.querySelector("#second");

const first = document.createElement("p");
first.textContent = "First";

second.before(first);

//5. after(): after() inserts the element after the selected element.

//Ex-1
const third = document.createElement("p");
third.textContent = "Third";

second.after(third);

//6. insertBefore(): Insert at a specific position.

//Syntax: parent.insertBefore(newElement, existingElement);

//Ex-1
const myContainer = document.querySelector("#myContainer");
const three = document.querySelector("#three");

const two = document.createElement("p");
two.textContent = "Two";

myContainer.insertBefore(two, three);

//7. remove(): remove() is used to remove an element directly from the DOM.

//Ex-1
const banana = document.querySelector("#item2");

banana.remove();

//8. removeChild(): removeChild() is a DOM method used to remove a child element from its parent element.

//Ex-1
const tasks = document.querySelector("#tasks");
const task = document.querySelector("#task2");

tasks.removeChild(task);
