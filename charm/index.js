
  $(".dawg").on("click", function(){
 var output = $("#uname").val();
 var charm = output.slice(0,1).toUpperCase() + output.slice(1,output.length).toLowerCase();
 alert("Hi " + charm + " it's really nice to meet you." );

 setTimeout(function() {
   $("#uname").val("");
 }, 1000);
 });

 $(".dmx").on("click", function(){
 $("h1").html("Hi, My Name is Ifemide Richard Adeola.");
 $(".title-image").attr("src", "images/ifemide.jpeg");


 setTimeout(function() {
   $("h1").html("Hi, My name is  Ademide Bethany Fasina."),
   $(".title-image").attr("src", "images/mygeee.jpeg");
 }, 3000);
 });

 $("button.dawg").on("mouseover", function(){
   $("input").slideUp("200").slideDown("200");
 });

 $("button.dmx").on("mouseover", function(){
   $("h1").fadeOut("100").fadeIn("100");
   $("h1").css("color", "purple");

   setTimeout(function() {
     $("h1").css("color", "#fff");
   }, 500);
 });

// Get the carousel elements

$("button.hun").on("click", function(){
  $(".carousel-item").toggleClass("carroll");

});
