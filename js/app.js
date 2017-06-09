$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $(document).scroll(function() { 
        if($(this).scrollTop() > $('#home').offset().top) {
            $("nav").attr("style",'background-color:#000000 !important');
            $("nav ul li a").attr("style",'color:white !important');
            $(".brand-logo").attr("style",'color:white !important');
            $("nav ul li a").hover(function(){
                $(this).attr("style",'background-color:gray !important');
            },function(){
                $(this).attr("style",'background-color:#000000 !important');
                $("nav ul li a").attr("style",'color:white !important');
            });
        } else {
            $("nav").attr("style",'background-color:transparent !important');
            $("nav ul li a").attr("style",'color:#000000 !important');
            $(".brand-logo").attr("style",'color:black !important');
            $("nav ul li a").hover(function(){
                $(this).attr("style",'background-color:gray !important');
            },function(){
                $(this).attr("style",'background-color:transparent !important');
                $("nav ul li a").attr("style",'color:#000000 !important');
            });
        }
    });
    
    
        var mailString;
        function updateMailString() {
            mailString = '?subject=' + encodeURIComponent($('#subject').val())
                + '&body=' + encodeURIComponent($('#body').val());
            console.log(mailString);
            $('#mail-link').attr('href',  'mailto:sudheeshshetty@gmail.com' + mailString);
        }
        $( "#subject" ).focusout(function() { updateMailString(); });
        $( "#body" ).focusout(function() { updateMailString(); });
    
});