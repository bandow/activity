var app = new Vue({
	el:"#app",
	data:{
		loading:true,
		isMaskActive:false,
		isCouponRuleActive:false,
		maskShare:false,
		testList:[
            //有异常的数据
            { "Code": 0, "Msg": "服务器错误", "Data": {} },
            //正常的数据
            { "Code": 1, "Msg": "", "Data": { "Id": 1, "Part": 1, "Title": "根据以下提示猜四字成语", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["天", "无", "共", "角", "光", "限", "尽", "涯", "无", "思", "此", "海", "相", "穷", "时"], "AnswerCount": 4 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 2, "Part": 1, "Title": "根据以下提示猜四字成语", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["破", "落", "之", "不", "筹", "有", "竹", "错", "觥", "致", "交", "齐", "之", "光", "势"], "AnswerCount": 4 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 3, "Part": 1, "Title": "根据以下提示猜四字成语", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["人", "周", "若", "庄", "床", "生", "梦", "蝶", "异", "白", "同", "日", "无", "做", "梦"], "AnswerCount": 4 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 4, "Part": 1, "Title": "根据以下提示猜四字成语", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["三", "意", "脚", "德", "满", "心", "拳", "其", "接", "三", "连", "二", "平", "心", "连"], "AnswerCount": 4 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 5, "Part": 1, "Title": "根据以下提示猜四字成语", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["冰", "风", "上", "窑", "飘", "天", "雪", "地", "交", "霜", "飘", "加", "相", "白", "加"], "AnswerCount": 4 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 6, "Part": 1, "Title": "根据以下提示猜四字成语", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["势", "竹", "礴", "如", "张", "磅", "已", "气", "大", "声", "不", "破", "立", "去", "两"], "AnswerCount": 4 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 7, "Part": 1, "Title": "根据以下提示猜四字成语", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["富", "国", "偷", "梁", "尽", "求", "敌", "可", "卖", "报", "荣", "求", "柱", "国", "换"], "AnswerCount": 4 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 8, "Part": 1, "Title": "根据以下提示猜四字成语", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["气", "东", "过", "气", "蓬", "粗", "脖", "大", "人", "才", "来", "朝", "紫", "色", "财"], "AnswerCount": 4 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 9, "Part": 2, "Title": "根据以下图片猜作品名称", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["蒙", "神", "女", "微", "的", "忧", "秘", "莎", "少", "伤", "美", "的", "丽", "笑", "娜"], "AnswerCount": 7 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 10, "Part": 2, "Title": "根据以下图片猜作品名称", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["的", "米", "开", "维", "思", "斯", "也", "维", "斯", "那", "琪", "纳", "罗", "朗", "洛"], "AnswerCount": 8 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 11, "Part": 2, "Title": "根据以下图片猜作品名称", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["夜", "向", "旋", "太", "天", "日", "空", "晚", "星", "的", "魁", "星", "阳", "转", "空"], "AnswerCount": 2 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 12, "Part": 2, "Title": "根据以下图片猜作品名称", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["二", "代", "界", "的", "时", "广", "世", "战", "胜", "日", "大", "的", "场", "利", "次"], "AnswerCount": 8 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 13, "Part": 2, "Title": "根据以下图片猜作品名称", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["菊", "日", "瓶", "伤", "黄", "花", "向", "忧", "葵", "阳", "葵", "太", "花", "中", "花"], "AnswerCount": 3 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 14, "Part": 2, "Title": "根据以下图片猜作品名称", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["中", "黑", "宁", "啡", "静", "咖", "的", "夜", "安", "镇", "日", "小", "馆", "夏", "间"], "AnswerCount": 6 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 15, "Part": 2, "Title": "根据以下图片猜作品名称", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["达", "最", "的", "基", "背", "徒", "督", "叛", "晚", "教", "宣", "奇", "后", "餐", "芬"], "AnswerCount": 5 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 16, "Part": 2, "Title": "根据以下图片猜作品名称", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["大", "白", "游", "虾", "玩", "味", "皮", "群", "小", "逗", "皮", "虾", "画", "趣", "白"], "AnswerCount": 2 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 17, "Part": 3, "Title": "下图中小孩手中拿的是什么？", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["兔", "狗", "偶", "猴", "布", "羊", "玩", "熊", "大", "熊", "子", "小", "鼠", "松", "子"], "AnswerCount": 2 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 18, "Part": 3, "Title": "下图中的数字2是什么颜色？", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["褐", "绿", "橙", "青", "灰", "杏", "红", "黑", "黄", "紫", "棕", "蓝", "粉", "靛", "白"], "AnswerCount": 1 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 19, "Part": 3, "Title": "下图中有几个小孩？", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["6", "1", "2", "3", "0", "0", "4", "5", "6", "1", "3", "7", "8", "9", "2"], "AnswerCount": 1 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 20, "Part": 3, "Title": "下图中有几双鞋子？", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["6", "1", "2", "3", "0", "0", "4", "5", "6", "1", "3", "7", "8", "9", "2"], "AnswerCount": 2 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 21, "Part": 3, "Title": "猜下图中有几个球？", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["6", "1", "2", "3", "0", "0", "4", "5", "6", "1", "3", "7", "8", "9", "2"], "AnswerCount": 1 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 22, "Part": 3, "Title": "下图中有几个相貌相同的人？", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["6", "1", "2", "3", "0", "0", "4", "5", "6", "1", "3", "7", "8", "9", "2"], "AnswerCount": 1 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 23, "Part": 3, "Title": "下图中最右边的风车什么颜色？", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["褐", "绿", "橙", "青", "灰", "杏", "红", "黑", "黄", "紫", "棕", "蓝", "粉", "靛", "白"], "AnswerCount": 1 } },
            { "Code": 1, "Msg": "", "Data": { "Id": 24, "Part": 3, "Title": "下图中有几个风车？", "Img": "http://resource1.dongchenghotels.com/image/TemplateContent/1c791866d4b64683830b792386effdf0.png?v=21.33", "Tips": ["6", "1", "2", "3", "0", "0", "4", "5", "6", "1", "3", "7", "8", "9", "2"], "AnswerCount": 1 } }
        ],
        currentData:[],
		great:true,
		name:'',
		tel:'',
		alertText:'',
		alertShow:false,
		selected:'',
		options: [  
		    { text: '城市便捷武汉王家湾龙阳村地铁站店', id: '0' },  
		    { text: '城市便捷南宁南湖公园店/城市便捷南宁动物园地铁站店', id: '1' },  
		    { text: '城市便捷桂林甲天下广场店', id: '2' },
		    { text: '城市便捷玉林民主南路店', id: '3' },  
		    { text: '城市便捷赤壁永邦城店', id: '4' },  
		    { text: '城市便捷广州长隆万博地铁站店', id: '5' },  
		    { text: '城市便捷深圳宝安海雅店', id: '6' }
	    ],
	    textareas:'',
        dataArray:new Array,
	    answerArr:new Array,
        onePartArray:new Array,
        secondePartArray:new Array,
        thirdPartArray:new Array,
        currentPart:1,
        countDown:30,
        isTiems:false
    }, 
	created:function(){
        const _this=this;
		console.log(_this.currentData)

        //处理数据*****************ajax
        //_this.testList=ajax回来的数据


        for(var i=0;_this.testList.length>i;i++){
            _this.dataArray.push(_this.testList[i].Data)
        }
        for(var j=0; j<_this.dataArray.length;j++){
            if(_this.dataArray[j].Part==1){
                _this.onePartArray.push(_this.dataArray[j].Data);  
            }else if(_this.dataArray[j].Part==2){
                _this.secondePartArray.push(_this.dataArray[j].Data);  
            }else if(_this.dataArray[j].Part==3){
               _this.thirdPartArray.push(_this.dataArray[j].Data);  
            }
        }
        _this.currentData=_this.testList[1];  
	},
	mounted:function(){
		const _this=this;
		_this.loading=false;
        _this.countTime();
        setTimeout(function(){
            _this.isTiems=true;
        },25000)
	},
	methods:{
		clickRule:function(){
			this.isMaskActive=true;
			this.isCouponRuleActive=true;
		},
		clickMask:function(){
			this.isMaskActive=false;
			this.isCouponRuleActive=false;
		},
		submit:function(){
			var _this=this;
			if(_this.name==''){
				_this.prompt('请输入您的名字');
                return
			}
            if(_this.tel==''){
	            _this.prompt('请输入您的手机号码');
	            return
            }else if(!_this.isTel(_this.tel)){
	            _this.prompt('手机号号码格式错误');
	            return
            }
            if(_this.selected==''){
            	_this.prompt('请选择试睡酒店');
                return
            } 
            if(_this.textareas==''){
            	_this.prompt('请输入您的宣言');
                return
            }
            console.log("提交内容......");
            _this.maskShare=true;
		},
		isTel: function (string) {
	        var reg =/^1(3|4|5|7|8)\d{9}$/; 
	        return reg.test(string);
        },
        prompt:function(str,callback){
            var _this=this;
            _this.alertText=str;
            _this.alertShow=true;
            setTimeout(function(){
              _this.alertShow=false;
              if(callback){
                callback();
              }
            },1000);
        },
        clickMaskShare:function(){
        	 this.maskShare=false;
        },
        clickSelect:function(item,index){
        	var _this=this;
        	_this.answerArr.push(item);
        	if(_this.answerArr.length==_this.currentData.Data.AnswerCount){
                _this.currentPart++;      		
                console.log(_this.currentPart);
                if(_this.currentPart<=3){
                    _this.answerArr=new Array;
                    _this.clickChange();  
                }else{
                    //调连接 大师菜鸟那个页面
                    //处理数据*****************ajax
                    // _this.answerArr 用户答案
                    console.log(0);
                }
                //倒计时初始化
                _this.countDown=30;
                _this.isTiems=false;
        	}
        	return _this.answerArr;
        },
        clickPrev:function(){
            var _this=this;
            _this.currentPart--
            console.log(_this.currentPart);
            if(_this.currentPart>=0){
                _this.answerArr=new Array;
                _this.clickChange();  
            }else{
                return false;
            }
            //倒计时初始化
            _this.countDown=30;
            _this.isTiems=false;
            setTimeout(function(){
                _this.isTiems=true;
            },25000);
        },
        clickChange:function(){
        	var _this=this;
            //下一关方法
            _this.passTest();
        },
        countTime:function(){
            var _this=this;   
            var t=window.setInterval(function(){
                if(_this.countDown > 0){
                   _this.countDown--
                   if(_this.countDown==0){
                        if(_this.currentPart<3){
                            _this.currentPart++;
                        }else{
                           //调连接 大师菜鸟那个页面
                            //处理数据*****************ajax
                            // _this.answerArr 用户答案
                            console.log(0); 
                            clearInterval(t);
                        }
                        //下一关方法
                        _this.passTest();
                        //倒计时初始化
                        _this.countDown=30;
                        _this.isTiems=false;
                        setTimeout(function(){
                            _this.isTiems=true;
                        },25000);
                   }
                }
            },1000);  
        },
        passTest:function(){
            var _this=this; 
            var num;
            if(_this.currentPart==1){
                num=Math.ceil(Math.random()*(_this.onePartArray.length));
            }else if(_this.currentPart==2){
                num=Math.ceil(Math.random()*_this.secondePartArray.length+_this.onePartArray.length)
            }else if(_this.currentPart==3){
                num=Math.ceil(Math.random()*_this.thirdPartArray.length+_this.onePartArray.length+_this.secondePartArray.length)
            }
            if (_this.testList.length > 0) {  
                _this.currentData=_this.testList[num];
            }
            _this.answerArr=new Array;
        }
	},
	watch:{
	},
	computed:{	
	},
	filters:{
	}
});
