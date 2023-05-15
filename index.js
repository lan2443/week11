const mode = document.getElementById("blue");
console.log(mode)

mode.addEventListener("click", function () {
    if (mode.innerText === "바뀌기 전") {
        mode.innerText = "바뀐 text!";
    } else {
        mode.innerText = "바뀌기 전";
    }
});


var item = document.getElementById("item");

var color = false;

item.addEventListener("click", changeColor);

function changeColor() {
    if (color == false) {
        item.style.backgroundColor = "red";
        color = true;
    } else {
        item.style.backgroundColor = "white";
        color = false;
    }
}


var item2 = document.getElementById("item2");

item2.addEventListener("mouseover", hovered, false);
item2.addEventListener("mouseout", hoveredOut, false);

function hovered(e) {
    item2.style.backgroundColor = "green";
    console.log("hovered");
}

function hoveredOut(e) {
    item2.style.backgroundColor = "blue";
    console.log("hoveredout");
}


// var item2 = document.getElementById("item2");
// var color2 = false ;

// item2.addEventListener("focus", changeGreen);

// function changeGreen() {
//     if (color2 == false) {
//         item2.style.backgroundColor = "green";
//     }
// }

// item2.addEventListener("mouseout", changeBlue);

// function changeBlue() {
//     if () {
//         item2.style.backgroundColor = "blue";
//     }
// }