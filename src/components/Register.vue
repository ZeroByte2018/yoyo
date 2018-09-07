<template>
  <div id="app-register">
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
			    <input type="password" class="form-control" id="password1" placeholder="请输入密码" v-model="password1">
			  </div>
			  <div class="form-group">
			    <label for="password2">确认密码</label>
			    <input type="password" class="form-control" id="password2" placeholder="请再次输入密码" v-model="password2">
			  </div>
			  <button type="submit" class="btn btn-block btn-success">注册</button>
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
  		password1:'',
  		password2:''
  	}
  },
  methods:{
  	onSubmit:function(){
  		if(this.password1 === this.password2){
  			const formData = {
  				email: this.email,
  				password1: this.password1,
  				type:'user'
  			};
  			
  			axios.post('/user.json',formData)
  			 .then((res) => {
  			 	this.$router.push({name:'loginLink'});
  			 });
  		}else{
  			alert("两次密码不一致");
  		}

  		
  	}
  }
}
</script>

<style>

</style>