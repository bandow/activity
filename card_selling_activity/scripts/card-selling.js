var app = new Vue({
	el:"#app",
	data:{
		list:new Array(),
		tel:'',
		items: [
　　　　　　{select:'黑金卡礼遇',active:true},
　　　　　　{select:'金卡礼遇'},
　　　　]

	}, 
	mounted:function(){
		var _this = this;
		this.$nextTick(function(){
			axios.get('http://10.44.61.24/activity/card_selling_activity/data/cardSelling.json')
			.then(
				function(retObj){
					if(retObj.status == 200){
						app.list = retObj.data.result.list.CenturionCardtList;
					}
				}
			)
			.catch(function(errorObj){
				console.log("get data error...");
			})
		});
	},
	methods:{
		selectStyle(item, index) {
　　　　　　this.$nextTick(function () {
　　　　　　　　this.items.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'active',false);
　　　　　　　　});
　　　　　　　　Vue.set(item,'active',true);
				axios.get('http://10.44.61.24/activity/card_selling_activity/data/cardSelling.json')
				.then(
					function(retObj){
						if(retObj.status == 200){
						    if (index==0) {
						     	app.list = retObj.data.result.list.CenturionCardtList;
						    }else if(index==1){
								app.list = app.list = retObj.data.result.list.goldCardtList;
							}
						}
					}
				)
				.catch(function(errorObj){
					console.log("get data error...");
				})   
　　　　　　});
　　　　}
	},
	watch:{
	},
	computed:{	
	},
	filters:{
	}
});


