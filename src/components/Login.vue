<template>
  <div id="app-login">
    <div class="container">
		<div class="row mt-3">
		<div class="col-4 mx-auto">
		<div class="card">
		<div class="card-body">
			<img src="../assets/logo.png" class="mx-auto d-block">

			<form @submit.prevent="onSubmit">
			  <div class="form-group">
			    <label for="email">邮箱</label>
			    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="请输入邮箱" v-model="email">
			  </div>
			  <div class="form-group">
			    <label for="password1">密码</label>
			    <input type="password" class="form-control" id="password1" placeholder="请输入密码" v-model="password">
			  </div>
			  <button type="submit" class="btn btn-block btn-success">登录</button>
			</form>
		</div>
		</div>
		</div>
		</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
  	return{
  		email:'',
  		password:''
  	}
  },
  methods:{
  	onSubmit:function(){
  		axios.get('/user.json')
  			 .then((res) => {
  			 	let isSuccess = false;
  			 	for(let oj in res.data){
  			 		if(this.email === res.data[oj].email && this.password === res.data[oj].password1){
  			 			isSuccess = true;
  			 			this.$store.commit('setEmail', res.data[oj].email)
  			 			localStorage.email = res.data[oj].email;
  			 			if(res.data[oj].type === 'admin'){
  			 				this.$store.commit('setIsAdmin', true)
  			 				localStorage.isAdmin = true;
  			 			}
  			 		}
  			 	}
  			 	if (isSuccess) {
  			 		this.$store.commit('setIsLogin', true);
  			 		localStorage.isLogin = true;
  			 		localStorage.sheets = [];
  			 		this.$router.push({name:'homeLink'});
  			 	}else{
  			 		alert("邮箱或密码错误");
  			 	}  			 		
  			 });
  	}
  }
}
</script>

<style>

</style>