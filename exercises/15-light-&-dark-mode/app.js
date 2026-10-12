// const btn = document.querySelector("#btn");

// let currentMode = "light";

// btn.addEventListener("click", () => {
//   if (currentMode === "light") {
//     document.body.style.backgroundColor = "black";
//     currentMode = "dark";
//   } else {
//     document.body.style.backgroundColor = "white";
//     currentMode = "light";
//   }

//   console.log(currentMode);
// });

//Same Using CSS Class

const btn = document.querySelector("#btn");

let currentMode = "light";

btn.addEventListener("click", () => {
  if (currentMode === "light") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    currentMode = "dark";
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    currentMode = "light";
  }

  console.log(currentMode);
});
