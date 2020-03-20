$(document).ready(function() {
  $("#jquery_jplayer_1").jPlayer({
    ready: function() {
      $(this).jPlayer("setMedia", {
        mp3: "/quarantine.mp3"
      });
    },
    swfPath: "/js",
    supplied: "m4a, oga"
  });
});
