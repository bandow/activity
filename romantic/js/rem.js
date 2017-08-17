!function(n){
    var  e=n.document,
         t=e.documentElement,
         i=960,
         d=i/100,
         o="orientationchange"in n?"orientationchange":"resize",
         a=function(){
             var n=t.clientWidth||320;n>640&&(n=640);
             t.style.fontSize=n/d+"px"
         };
         e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);

window.addEventListener('load', function () {
    FastClick.attach(document.body);
}, false);

function getRem(){
    var oWidth=document.body.clientWidth || document.documentElement.clientWidth;
    if(oWidth>640){
        oWidth=640;
    }
    return (oWidth/960*100);
}

