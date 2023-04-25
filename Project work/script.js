var mainimg=document.querySelector("img");
var images= ["images/astrological signs/aries.png", "images/astrological signs/taurus.png", "images/astrological signs/gemini.png", "images/astrological signs/cancer.png", "images/astrological signs/leo.png", "images/astrological signs/virgo.png", "images/astrological signs/libra.png", "images/astrological signs/scorpio.png", "images/astrological signs/scorpio.png", "images/astrological signs/sagittarius.png" , "images/astrological signs/capricorn.png", "images/astrological signs/aquarius.png", "images/astrological signs/pisces.png"];
var num =0;

function next(){
    num++;
    if(num>=images.length){
        num=0;
        mainimg.src=images [num]
    } else{
        mainimg.src=images[num]
    }
};

function back(){
    num--;
    if(num<0){
        num=images.length -1;
        mainimg.src=images[num]
    }else
    mainimg.src=images [num]
}



