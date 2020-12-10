"use strict";

function calc(num, pow, res) {
  num = prompt("Enter number:");
  pow = prompt("Enter pow:");
  res = num ** pow;

  alert("Your number is " + res);
}

calc();
