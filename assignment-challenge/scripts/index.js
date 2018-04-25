var $mask=$(".mask"),
	$loading=$(".loading"),
	$setMeal=$(".mask-set-meal");

function ruleExplain(){
	var text="活动规则文本内容框，采用文本过多的时候滚屏显示。活动规则文本内容框，采用文本过多的时候滚屏显示。活动规则文本内容框，采用文本过多的时候滚屏显示。活动规则文本内容框，采用文本过多的时候滚屏显示。活动规则文本内容框，采用文本过多的时候滚屏显示。活动规则文本内容框，采用文本过多的时候滚屏显示。活动规则文本内容框，采用文本过多的时候滚屏显示。活动规则文本内容框，采用文本过多的时候滚屏显示。活动规则文本内容框，采用文本过多的时";
	var html='';
	html+='<div class="mask-rule">';
	html+='<div class="mask-rule-mascot"><img src="../images/layer_mascot.png" alt=""></div>';
	html+='<div class="mask-rule-centent">';
	html+='<div class="mask-rule-close" onclick="closeRuleExplain();"><a href="javascript:;"></a></div>';
	html+='<h2>活动规则</h2>';
	html+='<div class="mask-rule-text">';
	html+='<p>'+text+'</p>';
	html+='</div>';
	html+='</div>';
	html+='</div>';
	$("body").append(html);	
	var $maskRule=$(".mask-rule");
	$mask.show();
	setTimeout(function(){
		$maskRule.addClass("on");
	},30)	
}
function closeRuleExplain(){
	var $maskRule=$(".mask-rule");
	$mask.hide();
	$maskRule.removeClass("on");
	setTimeout(function(){
		$maskRule.remove();
	},500)
	$setMeal.removeClass("on");
}
function activityLoading(){
	showActivityLoading();
    var x=0;
    var testTimes=setInterval(function(){
        x++
        $("#num").html(x);
        if(x==100){
        	closeActivityLoading();
            clearInterval(testTimes);
           	setMeal();
        }
    },30)  
}
function closeActivityLoading(){
	$mask.hide();
    $loading.hide();
}
function showActivityLoading(){
	$mask.show();
    $loading.show();
}
function setMeal(){
	$mask.show();
	$setMeal.addClass("on");
}