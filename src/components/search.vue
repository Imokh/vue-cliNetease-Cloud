<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" v-model="songname" @keyup.enter="search" />
      <button>
        <span class="iconfont icon-search" @click="search"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songname: "童话"
    };
  },
  methods: {
    search() {
      if (this.songname == "") {

        this.$message({
          message: "输入不能为空哦~~",
          type: "warning",
          duration:2000,
          showClose:true
        });
        return;
      }
      this.$router.push(`/results/${this.songname}`);
    }
  }
};
</script>

<style>
</style>
