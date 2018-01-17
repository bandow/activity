/*---------------------------------------
****公共方法***
--------------------------------------*/
//倒计时
function countDown(time, fn) {
    var maxtime = (new Date(time) - new Date()) / 1000;//剩余秒
    var timer = setInterval(function () {
        if (maxtime >= 0) {
            var dd = parseInt(maxtime / 60 / 60 / 24, 10);//计算剩余的天数  
            var hh = parseInt(maxtime / 60 / 60 % 24, 10);//计算剩余的小时数  
            var mm = parseInt(maxtime / 60 % 60, 10);//计算剩余的分钟数  
            var ss = parseInt(maxtime % 60, 10);//计算剩余的秒数  
            hh = checkTime(hh);
            mm = checkTime(mm);
            ss = checkTime(ss);

            msg = "距结束：" + dd + "天" + hh + "时" + mm + "分" + ss + "秒";
            fn(msg);
            --maxtime;
        }
        else {
            clearInterval(timer);
            fn("已结束");
        }
    }, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
//规则方法  
var defaultTitle='竞拍规则';
var defaultMsg='<p>1.竞拍状态有三种，一是正在进行，二是已结束（竞拍失败），三是已结束（竞拍成功）</p>'
+'<p>2.页面显示元素包括：</p>'
+'<p>2.1商品缩略图：最多显示5张，每隔5秒自动轮播，也可手指左右切换；如果后台只上传一张图片就不用轮播，点击显示大图；</p>'
+'<p>2.2竞拍状态和结束倒计时间；时间格式变为XX时XX分XX秒的倒计时形式；</p>'
+'<p>2.3商品标题：最多显示15个字，超出用省略号代替；</p>'
+'<p>2.4当前的积分；</p>'
+'<p>2.5市场价格，以元为单位；</p>'
+'<p>2.6起拍积分；</p>'
+'<p>2.7加分幅度</p>';
function ruleMask(title,msg){
	var html='<div class="rule-mask">';
	html+='<h2>'+title+'</h2>';
	html+='<div class="rule-mask-content">';
	html+=''+msg+'';
	html+='</div>';
	html+='<div class="rule-mask-close"><a href="javascript:;"></a></div>';
	html+='</div>';
	$('body').append(html);
	//显示
	$(".mask").show();
	setTimeout(function(){
		$(".rule-mask").addClass("on");
	},30)
	//隐藏
	$(".rule-mask-close,.mask").on("click",function(){
		$(".mask").hide();
		$(".rule-mask").removeClass("on");
		setTimeout(function(){
			$(".rule-mask").remove();
		},500)
	});
}
//分享方法
function shareMask(){
    var html='<div class="share-mask"><img src="images/share.png" alt=""></div>';  
    $('body').append(html); 
    $(".share-mask").on("click",function(){
        $(this).remove();
    });
}
