<template>
  <div>
    <div class="row mt-3">
		<div class="col-4">
			<!-- <div class="list-group mb-5">
			  <router-link tag="li" :to="{name:'historyLink'}" class="nav-link  border border-dark rounded"><a class="list-grounp-item list-grounp-item-action rounded">全部订单</a></router-link>
			  <router-link tag="li" :to="{name:'contactLink'}" class="nav-link rounded"><a class="list-grounp-item list-grounp-item-action rounded">未发货订单</a></router-link>
			  <router-link tag="li" :to="{name:'orderingGuideLink'}" class="nav-link rounded"><a class="list-grounp-item list-grounp-item-action rounded">已发货订单</a></router-link>
			  <router-link tag="li" :to="{name:'deliveryLink'}" class="nav-link rounded"><a class="list-grounp-item list-grounp-item-action rounded">已完成订单</a></router-link>
			</div> -->
			
			 
        <router-link tag="button" :to="{name:'allordersLink'}" type="button" class="list-group-item list-group-item-action" >全部订单</a></router-link>
        <router-link tag="button" :to="{name:'undeliveryLink'}" type="button" class="list-group-item list-group-item-action" >未发货订单</a></router-link>
        <router-link tag="button" :to="{name:'deliveriedLink'}" type="button" class="list-group-item list-group-item-action" >已发货订单</a></router-link>
        <router-link tag="button" :to="{name:'finishedordersLink'}" type="button" class="list-group-item list-group-item-action" >已完成订单</a></router-link>
			    
			  <!-- <button type="button" class="list-group-item list-group-item-action" :class="{active: actives['active2']}" @click.native="addActive(2)">未发货订单</button>
			  <button type="button" class="list-group-item list-group-item-action" :class="{active: actives['active3']}" @click.native="addActive(3)">已发货订单</button>
			  <button type="button" class="list-group-item list-group-item-action" :class="{active: actives['active4']}" @click.native="addActive(4)">已完成订单</button> -->
        <!-- <div class="list-group mb-5">
        <router-link tag="li" :to="{name:'allordersLink'}" class="nav-link  rounded" :class="{border: actives['active1']}" ><a class="list-grounp-item list-grounp-item-action rounded" @click="addActive(1)">全部订单</a></router-link>
        <router-link tag="li" :to="{name:'undeliveryLink'}" class="nav-link rounded" :class="{border: actives['active2']}" ><a class="list-grounp-item list-grounp-item-action rounded" @click="addActive(2)">未发货订单</a></router-link>
        <router-link tag="li" :to="{name:'deliveriedLink'}" class="nav-link rounded" :class="{border: actives['active3']}"><a class="list-grounp-item list-grounp-item-action rounded"  @click="addActive(3)">已发货订单</a></router-link>
        <router-link tag="li" :to="{name:'finishedordersLink'}" class="nav-link rounded" :class="{border: actives['active4']}"><a class="list-grounp-item list-grounp-item-action rounded"  @click="addActive(4)">已完成订单</a></router-link>
      </div> -->
      <!-- <div class="list-group mb-5">
        <router-link tag="a" :to="{name:'allordersLink'}" class="list-group-item list-group-item-action" >全部订单</router-link>
        <router-link tag="a" :to="{name:'undeliveryLink'}" class="list-group-item list-group-item-action" :class="{active: actives['active2']}" @click="addActive(2)">未发货订单</router-link>
        <router-link tag="a" :to="{name:'deliveriedLink'}" class="list-group-item list-group-item-action">已发货订单</router-link>
        <router-link tag="a" :to="{name:'finishedordersLink'}" class="list-group-item list-group-item-action">已完成订单</router-link>
      </div> -->
			
		</div>

		<div class="col-8">
			<router-view></router-view>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  created(){
  	
  },
  computed:{
    
  },
  methods:{
    
  }
}

</script>

<style>

</style>
