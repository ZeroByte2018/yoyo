<template>
  <div>
    <div class="row">
		<div class="col-12 mt-3">
			<table class="table table-bordered" v-if="JSON.stringify(getSheets) !== '{}'">
			  <thead>
			    <tr>
			      <th>数量</th>
			      <th>名字</th>
			      <th>价格</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="item in getSheets">
			      <td><button type="button" class="btn btn-outline-danger" @click="removeSheets(item.name)">-</button>{{item.quantity}}<button type="button" class="btn btn-outline-success" @click="addSheets(item.price, item.name)">+</button></td>
			      <td>{{item.name}}</td>
			      <td>{{item.price * item.quantity}}</td>
			    </tr>
			  </tbody>
			</table>
      <p class="text-right">总价：{{totalPrice}}元</p>
      <button type="button" class="btn btn-success float-right" @click="submitOrders">提交订单</button>
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
  methods:{
  	addSheets(price, name){
      // console.log(price, name);
      this.$store.commit('addSheets', {price:price, name:name});
    },
    removeSheets(name){
      // console.log(price, name);
      this.$store.commit('removeSheets', name);
    },
    submitOrders(){
      const order = {
        user: this.$store.getters.getEmail,
        order: this.$store.getters.getSheets,
        state: '未发货'
      };
      axios.post('/Orders.json',order)
         .then((res) => {
          localStorage.removeItem('sheets');
          window.location.reload();
          alert("添加成功");
         });
    }
  },
  computed:{
  	getSheets(){
      return this.$store.getters.getSheets;
    },
    totalPrice(){
      const sheets = this.$store.getters.getSheets;
      // console.log(sheets);
      let total = 0;
      for(let item in sheets){
        total += Number(sheets[item].price * sheets[item].quantity);
      }
      return total;
    }
  }
}
</script>

<style>

</style>
