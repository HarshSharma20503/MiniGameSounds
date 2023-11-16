document.addEventListener('DOMContentLoaded', function () {
  document.body.style.pointerEvents = 'auto';
});

function handleHint() 
{
  alert('In order to go to the next level you have to click these buttons');
}

var opt = "rqb";
function setName(cart)
{
  cart.innerHTML = opt;
}

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
  
  console.log(event.key);
  console.log(opt[jiitState])
  console.log(jiitState)
  if(event.key == opt[jiitState])
  {
    jiitState++;
    alert(jiitState);
  }
  else jiitState = 0 ;
  if(jiitState === opt.size())
  {
      handleJiitCombination();
  }
  // for(var i=0 ;i <opt.size() ; i++)
  // {
  //    if (event.key === "j" && jiitState === 0) {
  //   jiitState = 1;
  // }
  // if (event.key === "j" && jiitState === 0) {
  //   jiitState = 1;
  // } else if (event.key === "i" && jiitState === 1) {
  //   jiitState = 2;
  // } else if (event.key === "i" && jiitState === 2) {
  //   jiitState = 3;
  // } else if (event.key === "t" && jiitState === 3) {
  //   handleJiitCombination();
  //   jiitState = 0;
  // } else {
  //   jiitState = 0;
  // }
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
var arr= [];
arr.push("sounds/r.mp3");
arr.push("sounds/q.mp3");
arr.push("sounds/b.mp3");
arr.push("sounds/m.mp3");
arr.push("sounds/s.mp3");
arr.push("sounds/c.mp3");
arr.push("sounds/k.mp3");
arr.push("sounds/t.mp3");
arr.push("sounds/a.mp3");
arr.push("sounds/i.mp3");
arr.push("sounds/j.mp3");
arr.push("sounds/e.mp3");
arr.push("sounds/l.mp3");
arr.push("sounds/n.mp3");
arr.push("sounds/z.mp3");
arr.push("sounds/y.mp3");
arr.push("sounds/f.mp3");
arr.push("sounds/h.mp3");
arr.push("sounds/d.mp3");
arr.push("sounds/t.mp3");
arr.push("sounds/g.mp3");
arr.push("sounds/o.mp3");
arr.push("sounds/u.mp3");
arr.push("sounds/p.mp3");
arr.push("sounds/w.mp3");
// arr = shuffleArray(arr);

function makeSound(key) 
{
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
