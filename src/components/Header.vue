<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
    <a class="py-2" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
    </a>
    <a href="/" class="navbar-brand">yoyo悠悠之家</a>
    <!-- <ul class="navbar-nav">
      <li data-toggle="modal" data-target="#exampleModalCenter"><router-link to="/" class="nav-link">主页</router-link></li>
      <li data-toggle="modal" data-target="#exampleModalCenter"><router-link to="/Menu" class="nav-link">购物车</router-link></li>
      <li data-toggle="modal" data-target="#exampleModalCenter" v-if="isAdmin"><router-link to="/Admin" class="nav-link">管理</router-link></li>
      <li data-toggle="modal" data-target="#exampleModalCenter"><router-link to="/About" class="nav-link">关于我们</router-link></li>
    </ul> -->

    <ul class="navbar-nav ml-auto">
      <li v-if="!isLogin"><router-link to="/Login" class="nav-link">登录</router-link></li>
      <li v-if="!isLogin"><router-link to="/Register" class="nav-link">注册</router-link></li>
      <!-- <li v-if="isLogin">{{username}}</li> -->
      <li class="nav-item dropdown" v-if="isLogin"> 
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{username}}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/menu" v-if="!isAdmin">购物车</a>
          <a class="dropdown-item" href="/orders" v-if="!isAdmin">我的订单</a>
          <a class="dropdown-item" href="/admin" v-if="isAdmin">商品管理</a>
          <a class="dropdown-item" href="/ordersmanage" v-if="isAdmin">客户订单</a>
        </div>
      </li>
      <button type="button" v-if="isLogin" @click="logout" class="btn btn-outline-danger border-0 btn-sm text-center align-middle">[退出]</button>
    </ul>

  </nav>

</header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed:{
    username(){
      return this.$store.getters.getEmail;
    },
    isLogin(){
      return this.$store.getters.getIsLogin;
    },
    isAdmin(){
      return this.$store.getters.getIsAdmin;
    }
  },
  methods:{
    logout:function(){
      this.$store.commit('setIsLogin', false)
      this.$store.commit('setIsAdmin', false)
      this.$store.commit('setEmail', '')
      localStorage.removeItem('email');
      localStorage.removeItem('isLogin')
      localStorage.removeItem('isAdmin')
      localStorage.removeItem('sheets')
      this.$router.push({name:'homeLink'});
      window.location.reload();
    }
  }
}
</script>

<style>

</style>