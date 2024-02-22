window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-pmh").style.padding = "30px 10px";
    document.getElementById("nav-pmh").style.position = "fixed";
    document.getElementById("nav-pmh").style.right = "0";
    document.getElementById("nav-pmh").style.left = "0";
    document.getElementById("nav-pmh").style.top = "0";
    
  } else {
    document.getElementById("nav-pmh").style.padding = "20px 10px";
    document.getElementById("nav-pmh").style.position = "unset";
  }
}