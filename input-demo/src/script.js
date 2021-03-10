let elem = document.getElementById("test");
let textInput = document.getElementById("nameInput");
let slider = document.getElementById("mySlider");

let palette = ["#32a852", "#37f069", "#399e54", "#094218","#09ba70"];

function changeBg(){
  elem.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
}

function changeName(){
  console.log(textInput.value);
  elem.innerHTML = "Hello, " + textInput.value;
}

// textInput.oninput=function(){
//   console.log(textInput.value);
//   elem.innerHTML = "Hello, " + textInput.value;
// }


// function changeSize(){
//   console.log(slider.value);
// }

elem.style.width = slider.value + "px";
elem.style.height = slider.value + "px";

slider.oninput = function(){
  console.log(slider.value);
  elem.style.width = slider.value + "px";
  elem.style.height = slider.value + "px";
}

// slider.oninput = function(){
//   console.log(slider.value);
//   elem.style.backgroundColor = palette[slider.value]
// }


