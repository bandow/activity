/******************************/
/*
name:雪丘行
date:2017-09-18
version:0.0.1
*/
/******************************/
var popup=(function(){
	var _options={
		defaultTitle:'',
		defaultMsg:'',
		defaultBtnLeft:'确定',
		defaultBtnRight:'取消',
		defaultBtnMiddle:'知道了'
	}
	var _poppu_api={
		popupOne:function(defaultTitle,defaultMsg,leftBtn=_options.defaultBtnLeft,rightBtn=_options.defaultBtnRight){
		
			var html=document.createElement("div");
			var h3=document.createElement("h3");
			var title=document.createTextNode(defaultTitle);
			h3.appendChild(title);
			html.appendChild(h3);

			var divMsg=document.createElement("div");
			var p=document.createElement("p");
			var msg=document.createTextNode(defaultMsg);
			p.appendChild(msg);
			divMsg.appendChild(p);
			html.appendChild(divMsg);

			var divBtn=document.createElement("div");
			var btnLeft=document.createElement("botton");
			var btnLeftmsg=document.createTextNode(leftBtn);
			var btnRright=document.createElement("botton");
			var btnRightmsg=document.createTextNode(rightBtn);
			btnLeft.appendChild(btnLeftmsg);
			btnRright.appendChild(btnRightmsg);
			divBtn.appendChild(btnLeft);
			divBtn.appendChild(btnRright);
			html.appendChild(divBtn);

			document.body.appendChild(html);
			return this;	
		}
	}
	this.ECPoppu=_poppu_api;
})();