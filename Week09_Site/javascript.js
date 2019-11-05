var bodyQuery = document.querySelector("body");

document.addEventListener('keydown', changeColor);

function changeColor(e) {
if (e.keyCode === 32) {
  bodyQuery.style.backgroundColor = "black";
}
}
document.getElementById("myButton").onclick = function () {
    location.href = "reading2.html";
};