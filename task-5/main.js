"use strict";

let names = ['Alex', 'Sergei', 'Olga', 'Denis'];

let container = document.getElementById('menu');

let html = '';

for (let i = 0; i < 4; i++) {
    html += `<li>${names[i]}</li>`;
}

container.innerHTML = html;
