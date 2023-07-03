let counter = 10;
var num;
var t = {0:"fo"};
var maitra = "";
var s;
var te;
var guesses;
const inp = document.getElementById('in');

function playi() {
    num = inp[0].value;
    console.log(num);
    let url = `https://random-word-api.herokuapp.com/word?length=${num}`;
    te =  {"0": ""};
    t = fetch(url).then(response => response.json()).then(result=>(te = result));
    var v = setTimeout( fun, 2000);
    
    //window.location = 'Mainscreen.html';   
}
function fun()
{
    console.log(typeof te);
    console.log(te["0"]);
    sessionStorage.setItem("wordtarget", te["0"]);
    window.location = 'Mainscreen.html'; 
    //console.log(Object.values(te)[0]);    
}
sessionStorage.getItem("wordtarget");
console.log(num);
console.log(guesses);
const wordin = document.getElementById('word');
const counterValue = document.getElementById('counter-value');
function dec_guesses() {
    counter--;
    if(counter<0)
    losescreen();
    console.log(counter);
    counterValue.innerHTML = "0"+counter+"  GUESSES";
};
let B = 0;
let W = 0;
function count() {
    B=0;
    W=0;
    console.log(s);
    console.log(maitra);
    for(let i =0;i<s.length;i++)
		{
            if(s.charAt(i)==maitra.charAt(i))
            {W++;}
            else
            {
                for(let j =0;j<maitra.length;j++)
                {
                    if(s.charAt(i)==maitra.charAt(j)&&i!=j)
                    {   
                        B++;
                        j = maitra.length;
                    }
                    
                }
            }
		}
    if(W == s.length)
	{
        winscreen();
    }
}
const past = document.getElementById('pastguesses')

function add_word()
{
    past.innerHTML += s+"             "+ B+" B      " + W+ " W      " + "<br>";
}
var exists = true;
var timer = setTimeout(losescreen, 60000);
const invalid = document.getElementById('invalid');
const pie = document.querySelector('.chart');

function process() {
    //pie.style.animation = "none";
    //pie.style.setProperty('--percentage', '40%');
    //pie.style.setProperty('--percentage', '0%');
    //pie.style.animation = "timer 60s infinite linear";
    const chartContainer = document.getElementById("chartcontainer");
    const chart = document.querySelector(".chart");
      chartContainer.removeChild(chart);
      chartContainer.innerHTML = '<div class="chart"></div>';
    clearTimeout(timer);
    timer = setTimeout(losescreen, 600000);
    invalid.innerHTML = "";
    maitra = sessionStorage.getItem("wordtarget");
    maitra = maitra.toUpperCase();
    console.log(maitra);
    s = wordin[0].value;
    console.log(s.length);
    s = s.toUpperCase();
    exists = true;
    fetchApi(s);
    if(s.length==maitra.length&&exists==true)
    {
        dec_guesses();
        count();
        add_word();
    }else
    {
        invalid.innerHTML = "INVALID GUESS!";
        console.log("INVALID GUESS!");
    }

}

function winscreen()
{
    window.location = 'WinnerScreen.html';
}
const ans = document.getElementById('ans');
function losescreen()
{
    window.location = 'LosingScreen.html';   
    var x = sessionStorage.getItem("wordtarget");
    ans.innerHTML = "The word was mf "+x;   
}

function replay()
{
    window.location = 'Index.html';
}
function data(result, word){
    if(result.title){
        exists = false;
    }else{
        exists = true;
    }
}
function fetchApi(word){
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(response => response.json()).then(result=>data(result,word)).catch(() =>{
        exists = false;
    });
}