"use strict";

function arrNumber() {
  let arr = ["234", "176", "502", "306", "412"];
  return arr;
}

let arr = arrNumber();

function prepareRender() {
  let val = "";

  for (let i of arr) {
    if (i) {
      val += `${i}`;
    }
  }

  let newVal = val;
  for (let item of val) {
    if (item % 2 === 0) {
      newVal += item + " ";
    } else {
      newVal += item;
    }
  }
  console.log(newVal);

  return newVal;
}

prepareRender();

