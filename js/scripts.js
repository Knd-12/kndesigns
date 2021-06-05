// Scripts go here



$(document).ready(function(){

  
  
  ///////////////////
  //              
  //  tab message 
  //   change     
  //              
  //////////////////


  $(function() {
    var message = "Don't forget me!";
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


