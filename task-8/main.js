"use strict";

function arrString() {
  let str = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
  return str;
}

let str = arrString();

function prepareRender() {
  let val = "";

  for (let key of str) {
    val += `${key} `;
  }
  alert(val);
}

prepareRender();
