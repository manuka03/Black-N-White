const four = ["four", "scar", "fear", "sure"];

let counter = 5;
let num = 4;
let t = "fear";
var s;
const inp = document.getElementById('in');
const play = document.getElementById('Play');
function playi () {
    console.log(inp.length);
    num = inp[0].value;
   window.location = 'Mainscreen.html';
}
console.log(num);
function mybutton() {
    var life = document.createElement("img");
    life.setAttribute("src", "heart.svg");
    life.setAttribute("class", "hearts");
    document.body.appendChild(life);
   }
const counterValue = document.getElementById('counter-value');
const decrementBtn = document.getElementById('decrement-btn');
function dec_guesses() {
    counter--;
    console.log(counter);
    counterValue.innerHTML = "0"+counter+"GUESSES";
};

function process() {
    

}