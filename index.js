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
var color = false ;

item2.addEventListener("mouseover", changeColor2);

function changeColor2() {
    if (color == false) {
        item2.style.backgroundColor = "green";
        color = true;
    } else {
        item2.style.backgroundColor = "blue";
        color = false;
    }
}