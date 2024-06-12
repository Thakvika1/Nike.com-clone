

var acc = document.getElementsByClassName("accordion-footer");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelFooter = this.nextElementSibling;
    if (panelFooter.style.display === "block") {
      panelFooter.style.display = "none";
    } 
    else {
      panelFooter.style.display = "block";
    }
  });
}