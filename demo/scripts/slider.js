/******************************/
/*
name:雪丘行
date:2017-09-19
version:0.0.2
*/
/******************************/
var oWidth,touches,distance;
var sliderBox=document.querySelector(".slider-box");
var sliderBtn=document.querySelector(".slider-btn");
var sliderBg=document.querySelector(".slider-bg");
console.log(sliderBox)
sliderBox.addEventListener('touchstart',function(e){
	sliderBtn.style.transitionDuration=0+'s';
	sliderBg.style.transitionDuration=0+'s';
    touches = e.changedTouches[0].clientX;
    distance = touches - sliderBtn.clientWidth;
    oWidth = touches - (sliderBtn.clientWidth)/2;

    sliderBtn.style.marginLeft=distance+'px';   
    sliderBg.style.width = oWidth+'px';
    document.addEventListener("touchmove",defaultEvent,false);
},false);

sliderBox.addEventListener("touchmove", function(e) {
	sliderBtn.style.transitionDuration=0+'s';
	sliderBg.style.transitionDuration=0+'s';
    touches = e.changedTouches[0].clientX;
    distance = touches - sliderBtn.clientWidth;
    oWidth = touches - (sliderBtn.clientWidth)/2;

    if(distance <= 0){
    	sliderBtn.style.marginLeft = 0;
    	return false;
    }else if(distance >= sliderBox.clientWidth-sliderBtn.clientWidth){
    	sliderBtn.style.marginLeft=(sliderBox.clientWidth-sliderBtn.clientWidth)+'px';
    	sliderBg.style.width = sliderBox.clientWidth+'px';
    	return false;
    }else{
    	sliderBtn.style.marginLeft=distance+'px'; 	
    	sliderBg.style.width = oWidth+'px';
    }
    //console.log(touches,sliderBox.clientWidth);	
},false);

sliderBox.addEventListener("touchend",function(e) {
	touches = e.changedTouches[0].clientX;
    distance=touches - sliderBtn.clientWidth;
    oWidth = touches - (sliderBtn.clientWidth)/2;
    if(touches >= sliderBox.clientWidth){
        sliderBtn.style.marginLeft = (sliderBox.clientWidth - sliderBtn.clientWidth)+'px';
        sliderBg.style.width = sliderBox.clientWidth+'px';
    }else{
    	sliderBtn.style.transitionDuration=0.5+'s';
        sliderBtn.style.marginLeft = 0;
        sliderBg.style.transitionDuration=0.5+'s';
        sliderBg.style.width = sliderBtn.clientWidth/2+'px';
        setTimeout(function(){
        	sliderBg.style.width = 0;
        },500)
    }
    document.removeEventListener("touchmove",defaultEvent,false);
},false);

//初始化
function init(){
	sliderBtn.style.transitionDuration=0+'s';
	sliderBg.style.transitionDuration=0+'s';
   // touches = e.changedTouches[0].clientX;
    sliderBtn.style.marginLeft=0;   
    sliderBg.style.width = 0;
}

//阻止页面的滑动默认事件
function defaultEvent(e) {
    e.preventDefault();
}