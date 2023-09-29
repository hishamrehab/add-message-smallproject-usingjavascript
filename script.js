//get elements into variable

var inputEle = document.getElementById("input");
var buttonEle = document.getElementById("btn");
var msgEl = document.getElementById("msg");

// Events

buttonEle.onclick = function () {
  // get value from input
  var inputValue = input.value;

  if (inputValue != "") {
    //put input value into p
    msgEl.innerHTML = inputValue;
    // empty input value
    inputEle.value = "";
  }
};


