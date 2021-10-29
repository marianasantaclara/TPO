$(document).ready(main);

var contador = 1;

function main(){
$('.menu_bar').click(function(){
    //$('nav').toggle();

    if(contador==1){
        $('nav').animate({
            left:'0'
        });
        $('.slide').animate({
            left:'-100%'
        });
        $('form').animate({
            left:'-110%'
        });
        $('p').animate({
            left:'-110%'
        });
        contador = 0;
    } else {
        contador = 1;
        $('nav').animate({
            left:'-100%'
        });
        $('.slide').animate({
            left:'0'
        });
        $('form').animate({
            left:'0'
        });
        $('p').animate({
            left:'0'
        });
    }
});
};


