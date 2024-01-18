/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function generarExcusa() {
    let excusa =
      who[Math.floor(Math.random() * 4)] +
      " " +
      action[Math.floor(Math.random() * 4)] +
      " " +
      what[Math.floor(Math.random() * 3)] +
      " " +
      when[Math.floor(Math.random() * 5)];

    document.getElementById("excusas").innerHTML = excusa;
  }

  document.getElementById("generar").addEventListener("click", generarExcusa);
};
