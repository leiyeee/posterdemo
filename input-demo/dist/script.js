let elem = document.getElementById("titleOutput");
let elem1 = document.getElementById("contentOutput");
let textInput = document.getElementById("nameInput");
let contentInput = document.getElementById("contentInput");
let slider = document.getElementById("mySlider");

let canvas = document.getElementById("canvas");
let square = document.getElementById("square");
let circle = document.getElementById("circle");
let diamond = document.getElementById("diamond");
let triangle = document.getElementById("triangle");

let colors = ['#fcba03', '#63d647', '#d40000', '#1500d4', '#fafaf7'];
let colorIndex = 0;

/*let palette = ["#32a852", "#37f069", "#399e54", "#094218","#09ba70"];

function changeBg(){
  elem.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
}*/



// textInput.oninput=function(){
//   console.log(textInput.value);
//   elem.innerHTML = "Hello, " + textInput.value;
// }


// function changeSize(){
//   console.log(slider.value);
// }
/*

elem.style.width = slider.value + "px";
elem.style.height = slider.value + "px";

slider.oninput = function(){
  console.log(slider.value);
  elem.style.width = slider.value + "px";
  elem.style.height = slider.value + "px";
}
*/

// slider.oninput = function(){
//   console.log(slider.value);
//   elem.style.backgroundColor = palette[slider.value]
// }


function newColor(e, shape) {
    e.stopPropagation();
    shape.style.backgroundColor = colors[colorIndex];
    if (colorIndex >= colors.length - 1) {
        colorIndex = 0;
    } else {
        colorIndex++;
    }
}

// When you click on each shape, pass the element through to the function that changes its color
canvas.onclick = function (event) {
    newColor(event, canvas);
}

square.onclick = function (event) {
    newColor(event, square);
}

triangle.onclick = function (event) {
    newColor(event, triangle);
}

circle.onclick = function (event) {
    newColor(event, circle);
}

diamond.onclick = function (event) {
    newColor(event, diamond);
}



// Functions to hide or show a shape
circleInput.onclick = function () {
    if (circleInput.checked == false) {
        circle.style.display = "none";
    } else {
        circle.style.display = "block";
    }
}

squareInput.onclick = function () {
    if (squareInput.checked == false) {
        square.style.display = "none";
    } else {
        square.style.display = "block";
    }
}

diamondInput.onclick = function () {
    if (diamondInput.checked == false) {
        diamond.style.display = "none";
    } else {
        diamond.style.display = "block";
    }
}

triangleInput.onclick = function () {
    if (triangleInput.checked == false) {
        triangle.style.display = "none";
    } else {
        triangle.style.display = "block";
    }
}

function changeName() {
    console.log(textInput.value);
    elem.innerHTML = "Dear GSD, " + textInput.value;
    elem1.innerHTML = "Dear GSD, " + contentInput.value;
}
