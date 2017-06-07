	/***************************************
	******************使用说明***************
	**************Created by David J********
	****该js依赖于jQuery引入事需要先引入jquery库文件
	**
	*   如下引入顺序：
	*	<script type="text/javascript" src="jquery-1.9.1.min.js"></script>
	*	<script type="text/javascript" src="inputselect.js"></script>
	*
	*   使用方式如下：
	*	<input type="text" id="textInput" onchange="changeText()">
	*	<script type="text/javascript">
	*		var totalValues = ['abc','alike','aband','b','boy','body','c','cat','cook','d','dog','dot','date'];
	*		function changeText(){
				//第一个参数是input框的id  第二个参数是可选值  第三个参数是一些配置信息
	*			showTip("textInput",totalValues,{backgroundColor:"red"}); 
	*		}
	*	</script>
	*
	*
	*	默认配置信息:
	*
	*		backgroundColor: 列表值背景 如 "#ffffff",
	*		hoverBackgroundColor: 当鼠标悬浮时的背景色 如"#BFEFFF",
	*		divHeight: 显示提示框的高度 如"100px",
	*		divWidth: 显示提示框的宽度 如"200px",
	*		divBorder: 显示框的边框定义 如 "1px solid gray",
	*		overflowY: 显示框默认的overflowY属性 "scroll"
	*		inputHeight: 显示框默认高度为20
	*
	*/

	/**
	*	显示提示信息
	*	inputId:输入input框的id值
	*	totalValues:所有可选的值
	*/
	function showTip(inputId,totalValues,configs){
		var _inputNode = $("#"+inputId)[0],
			_inputValue = _inputNode.value,
			_parentNode = _inputNode.parentNode,  
			_divNode = document.createElement("div");
		var config = {
			backgroundColor: "#fff",
			hoverBackgroundColor: "#fff",
			divHeight: "5rem",
			divWidth: "90%",
			divBorder: "1px solid gray",
			overflowY: "scroll",
			inputHeight: 20
		};
		console.log(_inputNode);
		$.extend(true,config,configs);

		//如果已经存在了divNode 则删除
		var _lastDivNode = $("#"+inputId+"_div")[0];
		if(_lastDivNode)
			_parentNode.removeChild(_lastDivNode);

		var _offsetPosition = getPosition(_inputNode);



		//显示待选div样式
		_divNode.id = inputId+"_div";
		_divNode.style.height = config.divHeight;
		_divNode.style.width = config.divWidth;
		_divNode.style.overflowY = config.overflowY;
		_divNode.style.display = "block";
		_divNode.style.border = config.divBorder;
		_divNode.style.position = "absolute";
		_divNode.style.top = 2+'rem';
		_divNode.style.left =5+"%";
		_divNode.style.zIndex = 2;
		_divNode.style.backgroundColor="#fff";
		_divNode.style.padding=5+'%';

		//第一次加载的时候初始化样式文件
		var _headNode = $("head")[0];
		var _cssNode = document.createElement("style");
		var _cssContent = "#"+_divNode.id+" div{background-color:"+config.backgroundColor+";}";
		_cssContent += "#"+_divNode.id+" div:hover{background-color:"+config.hoverBackgroundColor+";}";
		_cssNode.innerHTML = _cssContent;
		_headNode.appendChild(_cssNode);

		_divNode.innerHTML = "";
		var _divHtml = "";
		for(var i=0;i<totalValues.length;i++){
			var _tempValue = totalValues[i];
			if(isIncluded(_tempValue,_inputValue)){
				_divHtml += "<div onclick='_inputDivClick(\""+inputId+"\",\""+_divNode.id+"\",\""+_tempValue+"\")'>"+_tempValue+"</div>";
			}
		}
		_divNode.innerHTML = _divHtml;
		_parentNode.appendChild(_divNode);


		if(_inputValue==""){
			_divNode.style.display="none";
		}
	}

	/**
	* _inputDivClick 当选中一个下拉列表选项时触发
	* inputNodeId: 输入框的id
	* divNodeId: 自动创建的div的id
	* value: 待选值
	*/
	function _inputDivClick(inputNodeId,divNodeId,value){
		var inputNode = $("#"+inputNodeId)[0],
			divNode = $("#"+divNodeId)[0];
		inputNode.value = value;
		inputNode.parentNode.removeChild(divNode);
	}

	/**
	* isInclude方法用于测试source是否包含有pattern这个字符串
	* source: 待测试的字符串
	* pattern:文本框输入的值
	*/
	function isIncluded(source,pattern){
		var _reg = new RegExp(".*"+pattern+".*");
		return _reg.test(source);
	}

	//将要获取绝对位置的标签传进去，返回一个包含x和y属性的对象
	function getPosition(e)
	{  
	    var t=e.offsetTop;  
        var l=e.offsetLeft;  
        while(e=e.offsetParent)
        { 
             t+=e.offsetTop; 
             l+=e.offsetLeft; 
        }   
        var point = eval("({x:"+l+",y:"+t+"})");
        return point;
	}