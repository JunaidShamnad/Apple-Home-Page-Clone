var acc = document.getElementsByClassName("footer-h4-div");
var i;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const cart = document.querySelector(".cart");
const icon = document.querySelector(".menu-div");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    cart.classList.toggle("none");
    icon.classList.toggle("close");
}

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
              to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
    }

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }

var limitFunc = function () {
  if (window.innerWidth > 880) {
    /*your functions for big screen*/
    window.location.reload(true);
    // window.location.href = "/#footer";
  }
};



window.addEventListener("resize", limitFunc);
window.addEventListener("onload", limitFunc);

