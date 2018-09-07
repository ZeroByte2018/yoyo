<template>
  <div id="app">
<div class="row">
  <div class="col-md-3 col-sm-12 mt-3" v-for="yoyoItem in getYoyoItems.slice((Number(getFenYeNum)-1)*8, Number(getFenYeNum)*8)" >
	<div class="card" style="width: 250px; height: 400px;" data-toggle="modal" :data-target="'#exampleModalCenter'+yoyoItem.id">
  <!-- <img class="card-img-top" :src="yoyoItem.img" alt="Card image cap"> -->
  <!-- <div class="img-container border mb-3" style="width: 250px; height: 250px; overflow: hidden;"><img :src="yoyoItem.img" id="portrait" style="width: 250px; height: 250px"></div> -->
  <div class="imgHolder" style="width: 248px; height: 250px"><img :src="yoyoItem.img" style="width: 248px; height: 250px"></div>
  <div class="card-body">
  	<p class="card-text h5 text-danger">￥{{yoyoItem.price}}</p>
    <p class="card-text h6">{{yoyoItem.name}}</p>
    <!-- <p class="card-text h6">{{yoyoItem.img}}</p> -->
    <button type="button" class="btn btn-outline-success" @click.stop="addSheets(yoyoItem.price, yoyoItem.name)" :disabled="getIsAdmin">加入购物车</button>
    <div class="modal fade" :id="'exampleModalCenter'+yoyoItem.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">详情介绍</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          {{yoyoItem.content}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>
  </div>
</div>
  </div>





</div>
<nav aria-label="..." class="mt-3">
  <ul class="pagination pagination-sm justify-content-center" >
    <li class="page-item " v-for="num in fenYe">
      <a class="page-link" href="#" @click="showfenye(num)">{{num}}</a>
    </li>
  </ul>
</nav>


<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button> -->

<!-- Modal -->
<!-- <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
     // yoyoItems:this.$store.getters.getYoyoItems
    }
  },
  methods:{
    addSheets(price, name){
      console.log(price, name);
      this.$store.commit('addSheets', {price:price, name:name});
      alert("添加成功");
    },
    getImg:function(imgURL){
        return imgURL;
    },
    showfenye(num){
      this.$store.commit('setFenYeNum', num);
    }
  },
  computed:{
    getYoyoItems(){
      return this.$store.getters.getYoyoItems
    },
    fenYe(){
      let maxNum = Math.ceil(this.$store.getters.getYoyoItems.length/8.0);
      let nums = [];
      
      for(let num = 1; num <= maxNum; num++){
        nums.push(String(num)); 
      }
      console.log(nums);
      return nums;
    },
    getFenYeNum(){
       return this.$store.getters.getFenYeNum
    },
    getIsAdmin(){
      return this.$store.getters.getIsAdmin
    }
  },
  created(){
    axios.get('/items.json')
         .then((res) => {
          let yoyoItems = [];
          for(let key in res.data){
            let yoyoItem = {};
            yoyoItem.id = key;
            yoyoItem.name = res.data[key].name;
            yoyoItem.price = res.data[key].price;
            yoyoItem.img = res.data[key].img;
            yoyoItem.content = res.data[key].content;
            yoyoItems.push(yoyoItem);
          }
          this.$store.commit('setYoyoItems', yoyoItems);
          console.log(JSON.stringify(yoyoItems));
          localStorage.yoyoItems = JSON.stringify(yoyoItems);
          // console.log(JSON.stringify(localStorage));
         });
  }
}
</script>

<style>
.card:hover{
  border-color: #ffc107;
}

.imgHolder{
  overflow: hidden;
}

.imgHolder img{
          cursor: pointer;
        transition: all 0.6s;
}

      .imgHolder img:hover{
        transform: scale(1.1);
      }
</style>
