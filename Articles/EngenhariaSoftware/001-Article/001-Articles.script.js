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
    
});
