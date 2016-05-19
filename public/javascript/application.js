$(document).ready(function() {
  $(".animsition").animsition({
   inClass: 'zoom-in-sm',
   outClass: 'zoom-out-sm',
   inDuration: 1500,
   outDuration: 800,
   linkElement: '.animsition-link',
   // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
   loading: true,
   loadingParentElement: 'body', //animsition wrapper element
   loadingClass: 'animsition-loading',
   loadingInner: '', // e.g '<img src="loading.svg" />'
   timeout: false,
   timeoutCountdown: 5000,
   onLoadEvent: true,
   browser: [ 'animation-duration', '-webkit-animation-duration'],
   // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
   // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
   overlay : false,
   overlayClass : 'animsition-overlay-slide',
   overlayParentElement : 'body',
   transition: function(url){ window.location.href = url; }
});
  $(document).ready(function() {
     var panels = $('.user-infos');
     var panelsButton = $('.dropdown-user');
     panels.hide();

    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function() {
            //Completed slidetoggle
            if(idFor.is(':visible'))
            {
              currentButton.html('<i class="glyphicon glyphicon-chevron-up text-muted"></i>');
           }
           else
           {
              currentButton.html('<i class="glyphicon glyphicon-chevron-down text-muted"></i>');
           }
        })
     });


    $('[data-toggle="tooltip"]').tooltip();

    $('button').click(function(e) {
       e.preventDefault();
       alert("This is a demo.\n :-)");
    });
 });
});