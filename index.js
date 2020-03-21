$("body").css("background-color", "white");

var interval = 27700; //

setTimeout(function() {
  $(".video-container").css("display", "none");
}, interval);

setTimeout(function() {
  $("body").css("background-color", "black");
}, interval);

setTimeout(function() {
  $("img.cover").attr("src", "quarantine-a-invert.png");
}, interval);
