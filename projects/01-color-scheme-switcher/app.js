const commonBtns = document.querySelectorAll(".commonBtn");

commonBtns.forEach((eachBtn) => {
  eachBtn.addEventListener("click", (evt) => {
    if (evt.target.id === "aqua") {
      document.body.style.backgroundColor = evt.target.id;
      console.log(evt.target.id);
    }

    if (evt.target.id === "yellowgreen") {
      document.body.style.backgroundColor = evt.target.id;
      console.log(evt.target.id);
    }

    if (evt.target.id === "cornflowerblue") {
      document.body.style.backgroundColor = evt.target.id;
      console.log(evt.target.id);
    }

    if (evt.target.id === "crimson") {
      document.body.style.backgroundColor = evt.target.id;
      console.log(evt.target.id);
    }
  });
});

//Another Way:

// const commonBtns = document.querySelectorAll(".commonBtn");

// commonBtns.forEach((eachBtn) => {
//   eachBtn.addEventListener("click", () => {
//     document.body.style.backgroundColor =
//       getComputedStyle(eachBtn).backgroundColor;
//     console.log(getComputedStyle(eachBtn).backgroundColor);
//   });
// });

//Concepts Learned:

// element.style.color -> reads the inline style set directly on the element.

// getComputedStyle(element).color -> reads the final computed color after CSS rules, inheritance and the cascade are applied.
