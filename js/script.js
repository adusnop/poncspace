$( document ).ready(function() {

    //audio effect
    var audio = $("audio")[0];
    $("button").click(function() {
        audio.play();
    });

    //start screen page
    $( ".start-screen" ).click(function() {
        $('.start-screen').hide();
        $('.side-mainmenu-desktop').show();
        $('.main-content-area').show();
        $('.content-page[content=home]').addClass('show');
        $('button.link-page[content=home]').addClass('show');
        
    });

    //show each menu content
    $( "button.link-page" ).click(function() {
        var cntname = $(this).attr('content');
        $('.content-page').removeClass('show');
        $('button.link-page').removeClass('show');
        $('.content-page[content='+cntname+']').addClass('show');
        $('button.link-page[content='+cntname+']').addClass('show');
      });


      //show works detail
      $( ".works-item" ).click(function() {
        var webname = $(this).attr('name');
        var webimg = $(this).attr('linkimg');
        var weblink = $(this).attr('linkweb');

        $('.works-name p').text(webname);
        $('.works-link a').text(weblink);
        $('.works-link a').attr('href',weblink);
        $('.works-img').css('background', webimg);
    });

    

});

