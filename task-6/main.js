"use strict";

let userName = "Vasya";

let strV1 = "";
let strV2 = "";

//**Вариант1
for (let name of userName) {
  strV1 += `${name}.`;
}
console.log(strV1);

//**Вариант1
for (let i = 0; i < userName.length; i++) {
  strV2 += userName[i] + ".";
}

console.log(strV2);
