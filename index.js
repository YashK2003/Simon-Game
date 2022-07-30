var gamearr = [];
var user = [];
var level = 0
var started = false;

document.addEventListener("keypress", function(event) {
  if (!started){
      userchance();
      started = true;
  }
});

function userchance() {
  user = [];
  level++;
  var st = "Level " + level;
  $("h1").text(st);
  var x = (Math.random() * 4);
  x = Math.floor(x);
  x++;
  gamearr.push(x);
  play(x);
}

$(".btn").click(function(event) {
  if (event.target.id == "green"){
    user.push(1);play(1);}
  else if (event.target.id == "red"){
    user.push(2);play(2);}
  else if (event.target.id == "yellow"){
    user.push(3);play(3);}
  else if (event.target.id == "blue"){
    user.push(4);play(4);}

var d = user.length - 1;
if (gamearr[d] === user[d]) {
      if (user.length === gamearr.length){
        setTimeout(function () {
          userchance();
        }, 1000);
      }
    } else {
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      starting();
    }

});


function starting() {
  level = 0;
  gamePattern = [];
  started = false;
}

function play(x) {
  if (x == 1) {
    var audio = new Audio("sounds/green.mp3");
    audio.play();
    $("#green").fadeOut().fadeIn();


  } else if (x == 2) {
    var audio = new Audio("sounds/red.mp3");
    audio.play();
    $("#red").fadeOut().fadeIn();

  } else if (x == 3) {
    var audio = new Audio("sounds/yellow.mp3");
    audio.play();
    $("#yellow").fadeOut().fadeIn();

  } else if (x == 4) {
    var audio = new Audio("sounds/blue.mp3");
    audio.play();
    $("#blue").fadeOut().fadeIn();
  }

}
