function fruitdrag(e, color) {
  e.dataTransfer.setData("color", color);
}

function fruitdrop(e) {
  e.preventDefault();

  console.log(e.dataTransfer.getData("color"));
}

function fruitallowdrop(e) {
  e.preventDefault();
}
