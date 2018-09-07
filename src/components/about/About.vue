<template>
  <div>
    <div class="row mt-3">
		<div class="col-4">
			<div class="list-group mb-5">
			  <router-link tag="li" :to="{name:'historyLink'}" class="nav-link  border border-dark rounded"><a class="list-grounp-item list-grounp-item-action rounded">历史订单</a></router-link>
			  <router-link tag="li" :to="{name:'contactLink'}" class="nav-link rounded"><a class="list-grounp-item list-grounp-item-action rounded">联系我们</a></router-link>
			  <router-link tag="li" :to="{name:'orderingGuideLink'}" class="nav-link rounded"><a class="list-grounp-item list-grounp-item-action rounded">点餐文档</a></router-link>
			  <router-link tag="li" :to="{name:'deliveryLink'}" class="nav-link rounded"><a class="list-grounp-item list-grounp-item-action rounded">快递信息</a></router-link>
			</div>
		</div>

		<div class="col-8">
			<router-view></router-view>
		</div>
    </div>
  </div>
</template>