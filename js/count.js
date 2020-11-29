
const browser = window.navigator.appName;
console.log("Merhaba " + browser);

var count = 0;

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const btn = document.getElementById("btn");

const h = document.querySelector("h1");
const pd = document.querySelector("p");
const b = document.querySelector("button");

function counter(d) {
    count += d;
    console.log(count);
    title.innerText = count;
}