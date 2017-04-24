var app = new Vue({
	el:"#app",
	data:{
		title:'活动专区',
		list:new Array(),
	},
	mounted:function(){
		var _this = this;
		this.$nextTick(function(){
			axios.get('http://10.44.172.245/activity/activity_area/data/activity.json')
			.then(
				function(retObj){
					if(retObj.status == 200){
						app.list = retObj.data.result.list;
					}
				}
			)
			.catch(function(errorObj){
				console.log("get data error...");
			})
		});
	},
	methods:{
	},
	watch:{
	},
	computed:{	
	},
	filters:{
	}
});

