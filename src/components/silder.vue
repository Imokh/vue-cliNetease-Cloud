<template>
  <div class="block">
    <el-carousel height="400px" class="my-class">
      <el-carousel-item v-for="(item,index) in list" :key="index+1">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  created() {
    this.$axios.get(`https://autumnfish.cn/banner?timestamp${Date.now()}`).then(res => {
      // console.log(res);
      this.list = res.data.banners;
    })
  },
  data() {
      return {
          list:[]
      }
  },
  name:'slider'
};
</script>

<style>
el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.my-class{
    width: 1080px;
    margin: 50px auto;
}
</style>
