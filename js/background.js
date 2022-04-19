HTML CSS JSResult Skip Results Iframe
EDIT ON
var colors = [
  'blue',
  'white',
  'red',
  'green',
  'brown',
  'purple'
];

var colorIndex = 0;

window.addEventListener('scroll', callback);

function callback() {
  var target = document.getElementById('target');
  
  target.style.backgroundColor = colors[colorIndex];
  
  if (colorIndex === colors.length) {
    colorIndex = 0;
  } else {
    colorIndex++;
  }
}
