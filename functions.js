var player1roll = Math.floor((Math.random() * 6) + 1);
var player2roll = Math.floor((Math.random() * 6) + 1);

function diceirollplayer1(){
  if (player1roll === 1){
    document.querySelector(".diceplayer1").setAttribute("src", "images/dice1.png")
  }
  else if (player1roll === 2){
    document.querySelector(".diceplayer1").setAttribute("src", "images/dice2.png")
  }
  else if (player1roll === 3){
    document.querySelector(".diceplayer1").setAttribute("src", "images/dice3.png")
  }
  else if (player1roll === 4){
    document.querySelector(".diceplayer1").setAttribute("src", "images/dice4.png")
  }
  else if (player1roll === 5){
    document.querySelector(".diceplayer1").setAttribute("src", "images/dice5.png")
  }
  else if (player1roll === 6){
    document.querySelector(".diceplayer1").setAttribute("src", "images/dice6.png")
  }
}

function diceirollplayer2(){
  if (player2roll === 1){
    document.querySelector(".diceplayer2").setAttribute("src", "images/dice1.png")
  }
  else if (player2roll === 2){
    document.querySelector(".diceplayer2").setAttribute("src", "images/dice2.png")
  }
  else if (player2roll === 3){
    document.querySelector(".diceplayer2").setAttribute("src", "images/dice3.png")
  }
  else if (player2roll === 4){
    document.querySelector(".diceplayer2").setAttribute("src", "images/dice4.png")
  }
  else if (player2roll === 5){
    document.querySelector(".diceplayer2").setAttribute("src", "images/dice5.png")
  }
  else if (player2roll === 6){
    document.querySelector(".diceplayer2").setAttribute("src", "images/dice6.png")
  }
}

function diceit(){

if (player1roll > player2roll){
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
  document.querySelector(".flagright").style.visibility = "hidden"
  }

else if (player2roll > player1roll){
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
  document.querySelector(".flagleft").style.visibility = "hidden"
  }

else{
document.querySelector("h1").innerHTML = "Draw!"
document.querySelector(".flagleft").style.visibility = "hidden"
document.querySelector(".flagright").style.visibility = "hidden"
  }
}

diceirollplayer1()
diceirollplayer2()
diceit()
