/**
 * 开发时间：2016/5/24
 * 开发人员：boxUnll
 * 开发项目：移动端滑动验证代码
 */


var oW,touches,oLeft;
var oSlider=document.getElementById('slider');
var oTrack=document.getElementById('track');
var oBtn = document.getElementById('btn');
var oBtn1=document.getElementById('btn1');
var oSpinner=document.getElementById('spinner');
var Ok=document.getElementById('ok');

oBtn.addEventListener('touchstart',function(e){
    console.log(e);
    touches = e.touches[0];
    oW = touches.clientX - oBtn.offsetLeft;
    oLeft = touches.clientX - oW;
    // oBtn.className="button";
    // oTrack.className="track";
    document.addEventListener("touchmove",defaultEvent,false);//阻止页面的滑动默认事件
},false);

oBtn.addEventListener("touchmove", function(e) {
    touches = e.touches[0];
    oLeft = touches.clientX - oW;
    if(oLeft < 0) {
        oLeft = 0;
    }else if(oLeft > oSlider.offsetWidth-oBtn.offsetWidth) {
        oLeft = (oSlider.offsetWidth-oBtn.offsetWidth);
    }
    oBtn.style.left = oLeft + "px";
    oTrack.style.width=oLeft+ 'px';
},false);

var loading= function(){
    oSpinner.style.display='block';
    Ok.style.display='none';
}
var ok=function(){
    Ok.style.display='block';
    oSpinner.style.display='none';
}
oBtn.addEventListener("touchend",function(e) {
    if(oLeft>=(oSlider.clientWidth-oBtn.clientWidth-5)){
        oBtn.style.left = (document.documentElement.clientWidth - oBtn.offsetWidth);
        oTrack.style.width= (document.documentElement.clientWidth - oBtn.offsetWidth);
        oBtn.style.display='none';
        oBtn1.style.display='block';
    }else{
        oBtn.style.left = 0;
        oTrack.style.width= 0;
        // oBtn.className="button-on";
        // oTrack.className="track-on";
    }
    document.removeEventListener("touchmove",defaultEvent,false);
},false);

function defaultEvent(e) {
    e.preventDefault();
}








