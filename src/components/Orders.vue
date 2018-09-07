<template>
	<div>
		<!-- <div class="card mt-3" v-for="order in getMyOrders">
		  <div class="card-header">
		    订单编号：{{order.id}}
		  </div>
		  <div class="card-body border-top" v-for="everyOrder in order.order">
		  	<img src="../assets/logo.png" class="d-block float-left">
		    <h4 class="card-title text-right">{{everyOrder.name}}</h4>
		    <h5 class="card-title text-right">{{everyOrder.price}}</h5>
		    <h6 class="card-title text-right">{{everyOrder.quantity}}</h6>
		  </div>
		  <div class="card-footer text-right"> 
		    <button type="button" class="btn btn-danger" @click="deleteOrder(order.id)">删除订单</button>
		  </div>

		</div> -->
		<div class="row" v-for="order in getMyOrders">
		<div class="col-12 mt-3">
			<table class="table  border">
			<thead >
			    <tr class="thead-light">
			      <th>订单号：{{order.id}}</th>
			      <th>总价：{{totalPrice(order.id)}}元</th>
			      <th></th>
			      <th>状态：{{order.state}}</th>
			    </tr>
			    <tr class="table-secondary">
			      <th>商品图片</th>
			      <th>商品名字</th>
			      <th>商品描述</th>
			      <th>商品数量</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="everyOrder in order.order">
			      <td><img :src="getImg(everyOrder.name)" style="width: 248px; height: 250px"></td>
			      <td>{{everyOrder.name}}</th>
			      <td>{{getContent(everyOrder.name)}}</th>
			      <td>{{everyOrder.quantity}}</td>
			    </tr>
			    <tr>
			      <td></td>
			      <td></th>
			      <td></th>
			      <td><button type="button" class="btn btn-success float-right" @click="confirmOrder(order.id)" v-if="!(order.state === '已收货')" :disabled="order.state === '未发货'">确认收货</button>
			      <button type="button" class="btn btn-danger float-right" @click="deleteOrder(order.id)" v-if="order.state === '已收货'">删除订单</button></td>
			    </tr>
			  </tbody>
			</table>
      
			<!-- <p>{{total}}</p> -->
		</div>
    </div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
  	return{
  		
  	}
  },
  created(){
  	axios.get('/Orders.json')
         .then((res) => {
          let myOrders = [];
          for(let key in res.data){
          	if(res.data[key].user === this.$store.getters.getEmail){
          		let myOrder = {};
	            myOrder.id = key;
	            myOrder.order = res.data[key].order;
	            myOrder.state = res.data[key].state;
	            myOrders.push(myOrder);
          	}
          }
          this.$store.commit('setMyOrders', myOrders);
          // console.log(JSON.stringify(myOrders));
          localStorage.myOrders = JSON.stringify(myOrders);
          // console.log(JSON.stringify(localStorage));
         });
  },
  methods:{
  	deleteOrder(id){
  		axios.delete('/Orders/'+id+'.json')
  			 .then((res) => {
  			 	alert("删除成功");
  			 	this.$store.commit('deleteMyOrder',id);
  			 });
  	},
  	confirmOrder(id){
  		axios.patch('/Orders/'+id+'.json', {
  			state: '已收货'
  		})
  			 .then((res) => {
  			 	// this.$store.commit('setAllOrders', allOrders);
       //    // console.log(JSON.stringify(myOrders));
       //    localStorage.allOrders = JSON.stringify(allOrders);
  			 	// this.$store.commit('deleteMyOrder',id);
  			 	this.$store.commit('setMyOrdersState', {id:id, state:'已收货'});
  			 	alert("确认成功");
  			 });
  	},
  	totalPrice(id){
      const Orders = this.$store.getters.getMyOrders;
      console.log(JSON.stringify(Orders));
      let rightOrder = [];
      for(let order in Orders){
      	if(Orders[order].id === id){
			rightOrder = Orders[order].order;
      	}
      }


      // console.log(sheets);
      let total = 0;
      for(let item in rightOrder){
        total += Number(rightOrder[item].price) * Number(rightOrder[item].quantity);
      }
      return total;
    },
    getContent(name){
    	console.log(this.$store.getters.getYoyoItems);
    	return this.$store.getters.getYoyoItems.find(function(item){
    		return item.name === name;
    	}).content;
    },
    getImg(name){
    	return this.$store.getters.getYoyoItems.find(function(item){
    		return item.name === name;
    	}).img;
    },
  },
  computed:{
  	getMyOrders(){
  		return this.$store.getters.getMyOrders;
  	},
  	
  }
}
</script>

<style>

</style>