// Scripts go here

var slideIndex = 1;

$(document).ready(function(){

  showSlides(slideIndex);
  
  ///////////////////
  //              
  //  tab message 
  //   change     
  //              
  //////////////////


  $(function() {
    var message = "Don't forget us!";
    var original;
  
    $(window).focus(function() {
      if (original) {
        document.title = original;
      }
    }).blur(function() {
      var title = $('title').text();
      if (title != message) {
        original = title;
      }
      document.title = message;
    });
  });
  

}); // end document ready


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}