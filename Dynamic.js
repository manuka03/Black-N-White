let counter = 10;
let num = 4;
let t = "FEAR";
var s;
var guesses;
const inp = document.getElementById('in');
const play = document.getElementById('Play');
function playi () {
    console.log(inp.length);
    if(num==5)
    {t = "ANIME";}
    if(num==6)
    {t = "IMPORT";}
    num = inp[0].value;
    guesses = 10;
   window.location = 'Mainscreen.html';
}
console.log(num);
function mybutton() {
    var life = document.createElement("img");
    life.setAttribute("src", "heart.svg");
    life.setAttribute("class", "hearts");
    document.body.appendChild(life);
   }
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
    console.log(t);
    for(let i =0;i<s.length;i++)
		{
			for(let j =0;j<t.length;j++)
			{
				if(i<s.length&j<t.length)
					{
                        if(s.charAt(i)==t.charAt(j))
                        {
                            if(i==j)
                            {
                                W++;
                            }else{B++;}
                            i++;
                            j=0;
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
function process() {
    clearTimeout(timer);
    timer = setTimeout(losescreen, 600000);
    s = wordin[0].value;
    exists = true;
    fetchApi(s);
    if(s.length==t.length&&exists==true)
    {
        dec_guesses();
        count();
        add_word();
    }else
    {
        console.log("INVALID GUESS!");
    }

}

function winscreen()
{
    window.location = 'WinnerScreen.html';
}

function losescreen()
{
    window.location = 'LosingScreen.html';
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