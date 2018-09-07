import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		//yoyoItems应该作为一个数组而不是对象，否则v-for试视图难以及时更新
		//yoyoItems: {},
		yoyoItems: localStorage.yoyoItems?JSON.parse(localStorage.yoyoItems):[],
		email: localStorage.email?localStorage.email:'',
		isLogin: localStorage.isLogin === 'true'?true:false,
		isAdmin: localStorage.isAdmin === 'true'?true:false,
		sheets: localStorage.sheets?JSON.parse(localStorage.sheets):[],
		myOrders: localStorage.myOrders?JSON.parse(localStorage.myOrders):[],
		allOrders: localStorage.allOrders?JSON.parse(localStorage.allOrders):[],
		fenYeNum: localStorage.fenYeNum?JSON.parse(localStorage.fenYeNum):'1',

	},
	getters:{
		getYoyoItems: state => state.yoyoItems,
		getEmail: state => state.email,
		getIsLogin: state => state.isLogin,
		getIsAdmin: state => state.isAdmin,
		getSheets: state => state.sheets,
		getMyOrders: state => state.myOrders,
		getAllOrders: state => state.allOrders,
		getFenYeNum: state => state.fenYeNum
	},
	mutations:{
		setFenYeNum(state, data){
			state.fenYeNum = data
		},
		setYoyoItems(state, data){
			state.yoyoItems = data 
		},
		setEmail(state, data){
			state.email = data 
		},
		setIsLogin(state, data){
			state.isLogin = data 
		},
		setIsAdmin(state, data){
			state.isAdmin = data 
		},
		setMyOrders(state, data){
			state.myOrders = data 
		},
		setAllOrders(state, data){
			state.allOrders = data 
		},
		setAllOrdersState(state, params){
			let index = state.allOrders.findIndex(function(order){
				return order.id === params.id;
			});
			state.allOrders[index].state = params.state;
			localStorage.allOrders = JSON.stringify(state.allOrders);
		},
		setMyOrdersState(state, params){
			let index = state.myOrders.findIndex(function(order){
				return order.id === params.id;
			});
			state.myOrders[index].state = params.state;
			localStorage.myOrders = JSON.stringify(state.myOrders);
		},
		deleteYoyoItem(state, key){
			//this.$delete(state.yoyoItems, key)
			state.yoyoItems.forEach(function(value, index){
				if(value.id === key){
					state.yoyoItems.splice(index, 1);
				}
				localStorage.yoyoItems = JSON.stringify(state.yoyoItems);
			})
		},
		deleteMyOrder(state, id){
			//this.$delete(state.yoyoItems, key)
			state.myOrders.forEach(function(value, index){
				if(value.id === id){
					state.myOrders.splice(index, 1);
					localStorage.myOrders = JSON.stringify(state.myOrders);
				}
			})
		},
		addYoyoItem(state, obj){
			//this.$set(state.yoyoItems, key, value)
			//ocalStorage.yoyoItems
			state.yoyoItems.push(obj);
			localStorage.yoyoItems = JSON.stringify(state.yoyoItems);
		},
		addSheets(state, params){
			//this.$set(state.yoyoItems, key, value)
			// console.log(price, name);
			let isInSheets = false;
			for(let item in state.sheets){
				// console.log(state.sheets[item]);
				if(state.sheets[item].name === params.name){
					isInSheets = true;
					state.sheets[item].quantity += 1;
					localStorage.sheets = JSON.stringify(state.sheets);
				}
			}
			if(!isInSheets){
				let obj = {}
				obj.name = params.name;
				obj.price = params.price;
				obj.quantity = 1;
				state.sheets.push(obj);
				// console.log(state.sheets);
				localStorage.sheets = JSON.stringify(state.sheets);
			}
			
		},
		removeSheets(state, name){
			for(let item in state.sheets){
				console.log(state.sheets[item]);
				if(state.sheets[item].name === name){
					state.sheets[item].quantity -= 1;
					if (state.sheets[item].quantity === 0){
						state.sheets.splice(item, 1)
						localStorage.sheets = JSON.stringify(state.sheets);
					}
				}
			}
		}

	},
	actions:{

	}
})