$(document).ready(function () {
  $("input").on("mouseover",function (){
   $("label").html("what would you like to bet on ? :");
  });
 $("button.dawg").on("click", function () {
   history.go(1);
  alert('Reloading Page');
  var play1 = prompt("player 1 name ?");
  var play2 = prompt("player 2 name ?");

$(".fst p").html(play1);
$(".snd p").html(play2);

  var randomNumber1 =  Math.floor(Math.random() * 6) + 1;

  var randomImgSrc = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

 var randomImgSrcc = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomImgSrcc);

 var output = $("#uname").val();
 var charm = output.slice(0,1).toUpperCase() + output.slice(1,output.length).toLowerCase();

 if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
   $(".type p").html(play1  +" win's the " + charm + " bet with highest figures.");
 }
 else if (randomNumber1 < randomNumber2) {
   document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
   $(".type p").html(play2 +" win's the " + charm + " bet with highest figures.");
 }
 else {
   document.querySelector("h1").innerHTML = "Draw!";
   $(".type p").html("Same figures on the  " + charm + " bet, let's retry.");
 }

  setTimeout( function() {
    $(".fst p").html("player 1");
    $(".snd p").html("player 2");
    $("h1").html("Refresh Me");
    $(".img1").attr("src", "images/dice6.png");
    $(".img2").attr("src", "images/dice6.png");
     $("input").val("");
     $("label").html("");
  $(".type p").html("Player with highest figures on the die wins!.");
  }, 5000);

     });
  });
