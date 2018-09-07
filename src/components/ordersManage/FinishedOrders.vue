<template>
	<div>
		<div v-for="order in FinishedOrders(getAllOrders)">
		<div>
			<table class="table  border">
			<thead >
			    <tr class="thead-light">
          <th>用户：{{order.user}}</th>
			      <th>订单号：{{order.id}}</th>
			      <th>总价：{{totalPrice(order.id)}}元</th>
			      <th>状态：{{order.state}}</th>
			    </tr>
			    <tr class="table-secondary">
			      <th>商品名字</th>
            <th></th>
            <th></th>
			      <th>商品数量</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="everyOrder in order.order">
			      <td>{{everyOrder.name}}</td>
            <td></td>
            <td></td>
			      <td>{{everyOrder.quantity}}</td>
			    </tr>
			    <tr>
			      <td></td>
			      <td></td>
            <td></td>
			      <td><button type="button" class="btn btn-success float-right" @click="delivery(order.id)"  :disabled="order.state !== '未发货'">发货</button>
			      </td>
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
          let allOrders = [];
          for(let key in res.data){
          	
          		let allOrder = {};
	            allOrder.id = key;
	            allOrder.order = res.data[key].order;
	            allOrder.state = res.data[key].state;
              allOrder.user = res.data[key].user;
	            allOrders.push(allOrder);
          	
          }
          this.$store.commit('setAllOrders', allOrders);
          // console.log(JSON.stringify(myOrders));
          localStorage.allOrders = JSON.stringify(allOrders);
          // console.log(JSON.stringify(localStorage));
         });
  },
  methods:{
  	totalPrice(id){
      const Orders = this.$store.getters.getAllOrders;
      // console.log(JSON.stringify(Orders));
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
    delivery(id){
      axios.patch('/Orders/'+id+'.json',{
        state: '已发货'
      })
         .then((res) => {
          // console.log('修改成功');


          this.$store.commit('setAllOrdersState', {id:id, state:'已发货'});
          // console.log(JSON.stringify(myOrders));
          alert("发货成功");
          // console.log(JSON.stringify(localStorage));
         });
    },
    FinishedOrders: function (orders) {
      return orders.filter(function(order){
        return order.state === '已收货';
      });
    }

  },
  computed:{
  	getAllOrders(){
  		return this.$store.getters.getAllOrders;
  	},
  	
  }

}
</script>