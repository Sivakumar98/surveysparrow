var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("header--inner")[0].classList.add(className);
  } else {
    document.getElementsByClassName("header--inner")[0].classList.remove(className);
  }
};

function myHeaderFunction() {
    debugger;
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }