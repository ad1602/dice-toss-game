var rand1=Math.floor(Math.random()*6)+1;
var rand2=Math.floor(Math.random()*6)+1;

var imgFirst="images/dice"+rand1+".png";

var image1=document.getElementsByTagName("img")[0];
image1.setAttribute("src",imgFirst);

var imgSecond="images/dice"+rand2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imgSecond);

if(rand1>rand2)
  document.getElementsByClassName("result")[0].innerHTML="Player 1 wins!!!";
else if(rand2>rand1)
   document.querySelector("h2").innerHTML="player 2 wins!!";
else
   document.getElementsByClassName("result")[0].innerHTML="its a draw!! toss again!!";

