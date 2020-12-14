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
      val += `${i}` + ".";
    } else val += "G ";
  }
  console.log(val);
}

prepareRender();
