<template>
  <div>
    <div class="row">
		<div class="col-8 mt-3">
		<form @submit.prevent="onSubmit">
		  <div class="form-group">
		    <label for="exampleInputEmail1">名字</label>
		    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="请输入新悠悠球的名字" v-model="name">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">价格</label>
		    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="请输入新悠悠球的价格" v-model="price">
		  </div>
		  <div class="form-group">

		    <label for="exampleFormControlFile1">图片</label>
		    <div class="img-container border mb-3" style="width: 250px; height: 250px; overflow: hidden;"><img src="" id="portrait" style="width: 250px; height: 250px"></div>
		    <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="showPreview">
		  </div>
		  <div class="form-group">
		    <label for="exampleFormControlTextarea1">描述</label>
		    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="content"></textarea>
		  </div>
		  <button type="submit" class="btn btn-primary">添加</button>
		</form>
		</div>

		<div class="col-4 mt-3">
			<h6>商品列表</h6>
			<table class="table table-bordered">
			  <thead>
			    <tr>
			      <th>名字</th>
			      <th>价格</th>
			      <th>下架</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="yoyoItem in getYoyoItems">
			      <td>{{yoyoItem.name}}</th>
			      <td>{{yoyoItem.price}}</td>
			      <td><button type="button" class="btn btn-outline-danger" @click="deleteItem(yoyoItem.id)">&times</button></td>
			    </tr>
			  </tbody>
			</table>
		</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			name:'',
			price:'',
			img:'',
			content:''
		}
	},
	methods:{
		onSubmit:function(){
  			let formData = {
  				name: this.name,
  				price: this.price,
  				img: this.img,
  				content: this.content,
  			};
  			
  			axios.post('/items.json',formData)
  			 .then((res) => {
  			 	// console.log(JSON.stringify(res.data));
  			 	formData.id = res.data.name
  			 	this.$store.commit('addYoyoItem', formData);
  			 	alert("添加成功");
  			 	window.location.reload();
  			 });
  		},
  		deleteItem:function(key){
  			axios.delete('/items/'+key+'.json')
  			 .then((res) => {
  			 	alert("删除成功");
  			 	this.$store.commit('deleteYoyoItem',key);
  			 	window.location.reload();
  			 });
  		},
 		showPreview:function(e){
                        var that=this;
                        var file = e.target.files[0];
                        var imgSize=file.size/1024;
                        if(imgSize>200){
                            alert('请上传大小不要超过200KB的图片')
                        }else{
                            var reader = new FileReader();
                            reader.readAsDataURL(file); // 读出 base64
                            reader.onloadend = function () {
                                // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                                var dataURL = reader.result;
                                document.getElementById("portrait").src = dataURL;
                                that.img = dataURL;
                                // console.log("OK");
                                // 下面逻辑处理
                                // $.ajax({
                                //     type:"post",
                                //     url:"/v1/userSet",
                                //     async:true,
                                //     data:{
                                //         avatar:dataURL,
                                //         avatar_wx:1,
                                //         token:token,
                                //         uid:uid,
                                //     },
                                //     success:function(e){
                                //         that.avatar=dataURL;
                                //         alert('修改成功');
                                //         $(".tsk").show().delay(1500).hide(0);
                                //     }
                                // });
                            };
                        }

                    }
  // 		function(e){
  // 			// console.log(e.target.files[0]);
		// 	// var file = source.files[0];
		// 	if(window.FileReader) {
		// 		// console.log(e.target.files[0]);
		// 		var fr = new FileReader();
		// 		fr.onloadend = function() {
		// 			console.log(e.target.files[0]);
		// 			// document.getElementById("portrait").src = e.target.result;
		// 		};
		// 		// fr.readAsDataURL(file);
		// 	}
		// }
  		
	},
	computed:{
	    getYoyoItems(){
	      return this.$store.getters.getYoyoItems;
	    }

	}
 
}
</script>

<style>

</style>