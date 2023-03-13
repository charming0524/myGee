$(".parent img").on("mouseover", function() {
  $(".parent img").attr("src", "images/ifeMide.png");
  setTimeout( function() {
    $(".parent img").attr("src", "images/myGee12.png");
  }, 3000);
});

$("#uname").on("click", function() {
  $("#uname").fadeToggle().fadeToggle();
  $("#uname").val("");
});
$("#fname").on("click", function() {
  $("#fname").fadeToggle().fadeToggle();
  $("#fname").val("");
});

$(".download-button").on("click", function(){

  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) * 1;

  if (loveScore < 30) {
      $(".parent img").attr("src","images/titanic.png" );
      $("h1").html("Can't really see any future in you guys");
      $(".parent p").html("your love life is scored " + loveScore + "%" + " Well i think You guys will get together like fire and water 🤣");

 } else if (loveScore > 60) {
   $(".parent img").attr("src","images/True-love.png" );
   $("h1").html("Pretty Good Match");
  $(".parent p").html("your love life is scored " + loveScore + "%" + " Yay I will say you guy's actually seems perfect together and definitely grow together but just remember love requires commitment!!!");

}  else  {
  $(".parent img").attr("src","images/clown.png" );
  $("h1").html("I believe it will work , if you guy's bury your ego")
 $(".parent p").html("your love life is scored " + loveScore + "%" + " you both love each other but you're also letting your ego's and pride get in the way.");
}

setTimeout(function(){
  $(".parent img").attr("src","images/myGee12.png" );
  $("h1").html("🤍 Unlock the Mystery Of Love.")
 $(".parent p").html("Crunch the Numbers of Love: Discover Your Love Compatibility and Uncover Your Relationship Potential With Our Love Calculator!");
$("#uname").val( "your name ?");
$("#fname").val( "your partner's name ?");
}, 8000);

});


$("#boy").on("click", function() {
$(".colored-section").css("background-color","#62CDFF");
});
