document.addEventListener('DOMContentLoaded', function () {
  document.body.style.pointerEvents = 'auto';
});

function handleHint() 
{
  alert('In order to go to the next level you have to click these buttons');
}

//assinging sounds to the array indexs
var arr = [];
for (var i = 0; i < 26; i++) {
    var ch = String.fromCharCode('a'.charCodeAt(0) + i);
    arr.push("sounds/" + ch + ".mp3");
}
// Generate a random index in the range [0, 25)
// var randomIndex = Math.floor(Math.random() * 26);

var b=0;
function generateRandomString(n) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let randomString = '';

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

var opt = generateRandomString(6);
function setName()
{
  document.getElementById("d1").innerHTML = opt[0];
  document.getElementById("d2").innerHTML = opt[1];
  document.getElementById("d3").innerHTML = opt[2];
  document.getElementById("d4").innerHTML = opt[3];
  document.getElementById("d5").innerHTML = opt[4];
  document.getElementById("d6").innerHTML = opt[5];

  console.log(opt);
}

setName();

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

function handleJiitCombination() 
{
  alert('            Congratulations         '); 
}

var jiitState = 0;

document.addEventListener("keypress", function (event) {

  makeSound(event.key);
  // alert(opt);
  var enteredCharIndex = event.key.charCodeAt(0) - 'a'.charCodeAt(0);
  console.log(enteredCharIndex);
  var parts = arr[enteredCharIndex].split("/");
  var characterAfterSlash = parts[1];
  var chars = characterAfterSlash[0];
  console.log(chars);
  
  if(chars == opt[jiitState])
  {
    jiitState++;
  if(jiitState === opt.length)
  {
      handleJiitCombination();
  }
  }
  else jiitState = 0 ;
});
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

arr = shuffleArray(arr);


function makeSound(key) 

{
  if(b)
  {
  console.log(arr);
  switch (key) {
    case "a":
      var tom1 = new Audio(arr[0]);
      tom1.play();
      break;
    case "b":
      var tom2 = new Audio(arr[1]);
      tom2.play();
      break;
    case "c":
      var tom3 = new Audio(arr[2]);
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio(arr[3]);
      tom4.play();
      break;
    case "e":
      var snare = new Audio(arr[4]);
      snare.play();
      break;
    case "f":
      var crash = new Audio(arr[5]);
      crash.play();
      break;
    case "g":
      var kick = new Audio(arr[6]);
      kick.play();
      break;

      case "h":
      var tom1 = new Audio(arr[7]);
      tom1.play();
      break;
    case "i":
      var tom2 = new Audio(arr[8]);
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio(arr[9]);
      tom3.play();
      break;
    case "k":
      var tom4 = new Audio(arr[10]);
      tom4.play();
      break;
    case "l":
      var snare = new Audio(arr[11]);
      snare.play();
      break;
    case "m":
      var crash = new Audio(arr[12]);
      crash.play();
      break;
    case "n":
      var kick = new Audio(arr[13]);
      kick.play();
      break;

      case "o":
      var tom1 = new Audio(arr[14]);
      tom1.play();
      break;
    case "p":
      var tom2 = new Audio(arr[15]);
      tom2.play();
      break;
    case "q":
      var tom3 = new Audio(arr[16]);
      tom3.play();
      break;
    case "r":
      var tom4 = new Audio(arr[17]);
      tom4.play();
      break;
    case "s":
      var snare = new Audio(arr[18]);
      snare.play();
      break;
    case "t":
      var crash = new Audio(arr[19]);
      crash.play();
      break;
    case "u":
      var kick = new Audio(arr[20]);
      kick.play();
      break;

      case "v":
      var tom1 = new Audio(arr[21]);
      tom1.play();
      break;
    case "w":
      var tom2 = new Audio(arr[22]);
      tom2.play();
      break;
    case "x":
      var tom3 = new Audio(arr[23]);
      tom3.play();
      break;
    case "y":
      var tom4 = new Audio(arr[24]);
      tom4.play();
      break;
    case "z":
      var snare = new Audio(arr[25]);
      snare.play();
      break;
    default:
      console.log(key);
  }
}
}




var a=1;  // for controlling the funtioning of the timer 



function thunderEffect(button) {
 if(a)
 {
  document.getElementByClassName("thunder-button").innerHTML="Started";
  a=0; 
  button.classList.add("clicked");
  b++;
  setTimeout(function() {
    button.classList.remove("clicked");
  }, 1000);
  var timeleft, time;
timeleft = time = 30;
$("#time").html(timeleft);
$("#timer_container").fadeTo("slow", 1);
$("#time").fadeTo("slow", 1);
var i, j, rotation, width;  

for (i = 0; i < timeleft; i++) {
  document.getElementById("timer_container").innerHTML += "<div class='tictic'></div>";
} 
var x = document.getElementById("timer_container");
var y = x.getElementsByTagName("div");
width = document.getElementById("timer_container").offsetWidth;
for (i = 0; i < timeleft; i++) {
  rotation = (360 / timeleft) * (i);
  y[i].style.cssText = "transform:rotate(" + rotation + "deg) translate(0px, -" + width / 2 + "px)";
}
var i = 0;
remainingtime = setInterval(function(){
  $("#time").html(timeleft);
  y[i].style.backgroundColor = "#ffffff";
  timeleft -= 1;
  i+=1;
  if (timeleft <= 0 && i >= time) {
    clearInterval(remainingtime);
    $("div").remove(".tictic");
    $("#time").html("Time out!");
    a=1;
  }
}, 1000);

 }
  
}

