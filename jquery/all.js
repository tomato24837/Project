$(document).ready(function() {
    $('h1').click (function(event){
     $('p').hide ();
     $('div').slideUp(1000).slideDown(3000);
     $('p').addClass('active')
    });
});