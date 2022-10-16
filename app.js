let slider = document.getElementById('myRange');
let output = document.getElementById('valueSpan');
output.innerHTML = slider.value;
console.log(slider, output);

slider.oninput = function() {
  output.innerHTML = this.value;
}

