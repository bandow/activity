var app = new Vue({
	el:"#app",
	data:{
		list:new Array(),
		privilege:new Array(),
		items: [
　　　　　　{select:'黑金卡礼遇',active:true},
　　　　　　{select:'金卡礼遇'},
　　　　],
		buyingItems:[
　　　　　　{buyingselect:'黑金卡特权',active:true},
　　　　　　{buyingselect:'金卡特权'},
　　　　　　{buyingselect:'普卡/银卡特权'},
　　　　],

	}, 
	mounted:function(){
		var _this = this;
		this.$nextTick(function(){
			axios.get('http://10.44.61.27/activity/card_selling_activity/data/cardSelling.json')
			.then(
				function(retObj){
					if(retObj.status == 200){
						app.list = retObj.data.result.list.CenturionCardtList;
						app.privilege = retObj.data.result.privilege.privilege1;
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
				axios.get('http://10.44.61.27/activity/card_selling_activity/data/cardSelling.json')
				.then(
					function(retObj){
						if(retObj.status == 200){
						    if (index==0) {
						     	app.list = retObj.data.result.list.CenturionCardtList;
						    }else if(index==1){
								app.list = retObj.data.result.list.goldCardtList;
							}
						}
					}
				)
				.catch(function(errorObj){
					console.log("get data error...");
				})   
　　　　　　});
　　　　},
		buyingSelectStyle(item, index) {
　　　　　　this.$nextTick(function () {
　　　　　　　　this.buyingItems.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'active',false);
　　　　　　　　});
　　　　　　　　Vue.set(item,'active',true);
				axios.get('http://10.44.61.27/activity/card_selling_activity/data/cardSelling.json')
				.then(
					function(retObj){
						if(retObj.status == 200){
						    if (index==0) {
						     	app.privilege = retObj.data.result.privilege.privilege1;
						    }else if(index==1){
								app.privilege = retObj.data.result.privilege.privilege2;
							}else if(index==2){
								app.privilege = retObj.data.result.privilege.privilege3;
							}
						}
					}
				)
				.catch(function(errorObj){
					console.log("get data error...");
				})   
　　　　　　});
　　　　},
	},
	watch:{
	},
	computed:{	
	},
	filters:{
	}
});


