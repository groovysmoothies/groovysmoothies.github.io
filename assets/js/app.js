// J-FUCKIN-S
// ♫ LET'S GROOVE ♫
// ♫ feat DJ KLAVN ♫

var limit = 6;
var counter = limit;
var colors = ['blue', 'yellow', 'red'];

var colorBlocks = document.getElementsByClassName('colorBlock');

var groovy = false;

function getRandomColor() {
  return colors[Math.floor(colors.length * Math.random())];
}

function getNewCount(counter) {
  return 1 + Math.floor(Math.random() * counter * .5);
}

function switchRandomColor(currentColor) {
  var newcolor = getRandomColor();

  while (newcolor == currentColor) newcolor = getRandomColor();

  return newcolor;
}


var fruitNumber = document.getElementById('fruitNumber');
var fruitColor = document.getElementById('fruitColor');
var count = document.getElementById('count');

function updateText() {
  fruitNumber.innerHTML = currentCount.toString();
  fruitColor.innerHTML = currentColor;
  count.innerHTML = limit - counter;
}



var currentColor = getRandomColor();
var currentCount = getNewCount(counter);
updateText();


function blend() {
  if (groovy) {
    document.getElementById('game').dispatchEvent(new Event('shunt'));
  } else {

  }
}

function fruitdrag(e, color) {
  e.dataTransfer.setData("color", color);
}

function fruitdrop(e) {
  e.preventDefault();

  c = e.dataTransfer.getData("color");

  if ((c == currentColor) && (!groovy)) {
    --currentCount;
    --counter;

    cb = colorBlocks[counter];
    cb.classList.remove('clear');
    cb.classList.add(c);

    if (counter == 0) {
        document.getElementById('blendButton').classList.remove('inactive');
        document.getElementById('congrats').classList.remove('hidden');
        document.getElementById('instructions').classList.add('hidden');
      groovy = true;
    }

    if (currentCount == 0) {
      currentColor = switchRandomColor(currentColor);
      currentCount = getNewCount(counter);
    }

    updateText();
  } else {

  }
}

function fruitallowdrop(e) {
  e.preventDefault();
}


var blendButton = document.getElementById('blendButton');
var congrats = document.getElementById('congrats');
var instructions = document.getElementById('instructions');

document.getElementById('blendAnother').addEventListener('click', function() {
    window.location = "index.html";
    //    window.location = "#game";
//    window.location.reload();
//    for (var i = colorBlocks.length-1; i >= 0; --i) {
//        cb = colorBlocks[i];
//        cb.className = "colorBlock clear";
//        console.log(cb.className);
//        console.log(i);
//    }
//
//    console.log('wtf', i);
//
//    counter = limit;
//    groovy = false;
//    currentColor = getRandomColor();
//    currentCount= getNewCount(counter);
//    updateText();
//    blendButton.classList.add('inactive');
//    congrats.classList.add('hidden');
//    instructions.classList.remove('hidden');
});
