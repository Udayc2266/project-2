let buttons=document.querySelectorAll(".button");
let h1=document.querySelector("#input");
let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let seven=document.querySelector("#seven");
let eight=document.querySelector("#eight");
let nine=document.querySelector("#nine");
let zero=document.querySelector("#zero");
let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");
let divide=document.querySelector("#divide");
let multi=document.querySelector("#multi");
let forword=document.querySelector("#forword");
let backward=document.querySelector("#backward");
let dot=document.querySelector("#dot");
let nums=document.querySelector(".nums");
let element=document.querySelector(".element");


for (button of buttons){
    function all(button){
        button.addEventListener("click",()=>{
            h1.innerText=button.innerText;
            console.log(button.innerText);
        }
        )}
    }

all(one);
all(two);
all(three);
all(four);
all(five);
all(six);
all(seven);
all(eight);
all(nine);
all(zero);
all(minus);
all(forword);
all(backward);
all(divide);
all(plus);
all(multi);
all(dot);

