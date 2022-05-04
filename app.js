"use strict";
console.log("ab9");

const dice = document.querySelector(".dice");
const advice = document.querySelector("h2");
const adviceNumber = document.querySelector("h3");

dice.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceNumber.textContent = `Advice #${data.slip.id}`;
      advice.textContent = `“${data.slip.advice}”`;
    });
});
