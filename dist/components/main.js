window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.backgroundColor = "#f5f5f5";
    document.getElementById("inside").style.height = "55px";
    document.getElementById("navbar").style.padding = "15px";
    document.getElementById("logbtn").style.padding = "13px 0";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("logbtn").style.padding = "3px 15px";
    document.getElementById("inside").style.height = "120px";
  }
}

jQuery(document).ready(function() {

        jQuery(window).load(function() {
            $(".loader").fadeOut(25000);
        });
});

// Toggle Button = Dropdown Menu
function navToggle(element) {
  const toggleContent = document.getElementsByClassName("toggle-content");
  const thisToggleDrop = element.nextSibling.nextSibling;
  
  if (!thisToggleDrop.classList.contains('appear')) {
    let i;
    for (i = 0; i < toggleContent.length; i++) {
      toggleContent[i].classList.remove('appear');
    }
  }
  thisToggleDrop.classList.toggle("appear");
};

function myFunction(element) {
  const dropdowns = document.getElementsByClassName("dropdown-content");
  
  const thisDropdown = element.nextSibling.nextSibling;
  
  if (!thisDropdown.classList.contains('show')) {  
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
  
  thisDropdown.classList.toggle("show");
}