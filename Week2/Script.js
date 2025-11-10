function myFunction() {
  document.getElementById("1").innerHTML = "Famous for jungle safari";
}
function myFunction1() {
  document.getElementById("2").style.display = "none";
}
function changeColor() {
  document.getElementById("4").style.backgroundColor = "grey";
}
function changeImage() {
  document.getElementById("cityImage").src = "portugal1.jpg";
}
function toggleParagraph() {
  let para = document.getElementById("toggleP");
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
}
function sum() {
  let x = 5;
  let y = 6;
  let z = x + y;
  document.getElementById("demo").innerHTML = z;
}