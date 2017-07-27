var app = new Vue({
	el:"#app",
	data:{
		title:'送你一份好友专属礼包',
		couponList:new Array(),
		tel:'',
		isActive:true,
		isRuleActive:true,
		isCodeActive:true,
		isGiftActive:true,
		noRedPacket:{
			show:false,
			hidden:true
		},
		redPacket:{
			show:true,
			hidden:false
		}
	}, 
	mounted:function(){
		var _this = this;
		this.$nextTick(function(){
			axios.get('http://10.44.61.23/activity/new_hand_gift/data/gift.json')
			.then(
				function(retObj){
					if(retObj.status == 200){
						app.couponList = retObj.data.result.couponList;
						app.tel=retObj.data.result.tel;
					}
				}
			)
			.catch(function(errorObj){
				console.log("get data error...");
			})
		});
	},
	methods:{
		activityTitle:function(){
			this.isActive = false ;
			this.isRuleActive= false ;
		},
		maskClick:function(){
			this.isActive=true; 
			this.isRuleActive=true; 
			this.isCodeActive= true;
			this.isGiftActive=true;
		},
		close:function(){
			this.isActive=true;
			this.isRuleActive=true;
		},
		but:function(){
			this.isActive = false;
			this.isCodeActive= false;
		},
		closeTwo:function(){
			this.isActive = true;
			this.isCodeActive= true;
		},
		closeThree:function(){
			this.isActive = true;
			this.isGiftActive= true;
		}
	},
	watch:{
	},
	computed:{	
	},
	filters:{
	}
});

