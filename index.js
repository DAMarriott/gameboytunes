$("body").css("background-color", "white");

var interval = 27750; //

setTimeout(function() {
  $("body").css("background-color", "black");
  $("img").attr("src", "quarantine-a-invert.png");
}, interval);
