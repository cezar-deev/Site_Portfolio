$(document).ready(function(){
    //--Evento ao rolar o scroll do mouse--//
    $(window).scroll(function(){  
        //--Barra Superior verde--//
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        //--Seta de Subir a tela--//
        if(this.scrollY > 500){ 
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show"); 
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});

     });
    //--Escritas Automaticas--//
     var typed = new Typed(".typing", {
         strings:[ "Engenharia de Software", "Supervisor de Sistemas",],
         typeSpeed:50,
         backSpeed:30,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:[ "Desenvolvedor Web", "Graduando em Engenharia de Software", "Supervisor de Sistemas ControlTub",],
        typeSpeed:50,
        backSpeed:30,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});
