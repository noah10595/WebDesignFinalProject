var toggle=false;

document.body.querySelector(".menuIcon").addEventListener("click" , function(){

    toggle=!toggle;

    if(toggle){
        document.body.querySelector(".menu").style.top="0";
    }else{
        document.body.querySelector(".menu").style.top="-250px";
    }

})

document.body.querySelector(".clickable1").addEventListener("click", function(){
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".first").style.zIndex="2";
    }else{
        document.body.querySelector(".first").style.zIndex="-1";
    }
})

document.body.querySelector(".clickable2").addEventListener("click", function(){
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".second").style.zIndex="2";
    }else{
        document.body.querySelector(".second").style.zIndex="-1";
    }
})

document.body.querySelector(".clickable3").addEventListener("click", function(){
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".third").style.zIndex="2";
    }else{
        document.body.querySelector(".third").style.zIndex="-1";
    }
})

document.body.querySelector(".clickable4").addEventListener("click", function(){
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".fourth").style.zIndex="2";
    }else{
        document.body.querySelector(".fourth").style.zIndex="-1";
    }
})