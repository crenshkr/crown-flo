/*

const parallax = document.getElementById ('parallax');

window.addEventListener('scroll', function () 
{
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";


}) */

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}