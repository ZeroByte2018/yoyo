<template>
  <div id="app">
    <div class="container-fluid p-0">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- <div class="container-fluid p-0">
      <app-footer></app-footer>
    </div> -->
    <!-- <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="container">
            <div class="row mt-3">
            <div class="col-12">
            <div class="card">
            <div class="card-body">
              <img src="./assets/logo.png" class="mx-auto d-block">

              <form>
                <div class="form-group">
                  <label for="email">邮箱</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="请输入邮箱">
                </div>
                <div class="form-group">
                  <label for="password1">密码</label>
                  <input type="password" class="form-control" id="password1" placeholder="请输入密码">
                </div>
                <button type="submit" class="btn btn-block btn-success">登录</button>
              </form>
              <a href="/register" class="d-block float-right mt-3">注册新账号</a>
            </div>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  components:{
    "app-header": Header,
    "app-footer": Footer
  }
}
</script>

<style>

</style>
