var limit = 5;
var counter = limit;
var colors = ['blue', 'yellow', 'red'];



var groovy = false;

function getRandomColor() {
  return colors[Math.floor(colors.length * Math.random())];
}

function getNewCount(counter) {
  return 1 + Math.floor(Math.random() * counter);
}

function switchRandomColor(currentColor) {
  var newcolor = getRandomColor();

  while (newcolor == currentColor) newcolor = getRandomColor();

  return newcolor;
}



function updateText() {
  document.getElementById('fruitNumber').innerHTML = currentCount.toString();
  document.getElementById('fruitColor').innerHTML = currentColor;
  document.getElementById('count').innerHTML = limit - counter;
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

    if (counter == 0) {
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
