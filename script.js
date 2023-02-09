function generate() {
  var x = document.getElementById("number").value;

  let hasil = null;
  let background = null;
  let font = null;

  if(x % 3 === 0 && x % 5 === 0) {
    hasil = "FizzBuzz!";
    background = "pink";
    font = "blue"
  } else if ( x % 3 === 0 || x % 5 === 0) {
    if (x % 3 === 0) {
      hasil = "Fizz!";
      background = "violet";
      font = "red";
    } else {
      hasil = "Buzz!"
      background = "orange";
      font = "green";
    }
  } else {
    hasil = x;
    background = "black";
    font = "white";
  }
  document.getElementById("result").innerHTML = hasil;


  var id_a = document.getElementById("result");
  id_a.style.backgroundColor = background;
  id_a.style.color = font;
}