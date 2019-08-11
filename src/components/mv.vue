<template>
  <div class="video">
    <div class="title-wrapper">
      <span class="tag">MV</span>
      <span class="title">{{songName}}</span>
      <span class="artist">{{singerName}}</span>
    </div>
    <video :src="mvUrl" controls></video>
  </div>
</template>

<script>
export default {
  created() {
    let mvid = this.$route.params.mvid;
    this.$axios.get(`/mv/detail?mvid=${mvid}`).then(res => {
      console.log(res);
      this.songName = res.data.data.name;
      let str = "";
      for (let i = 0; i < res.data.data.artists.length; i++) {
        str += res.data.data.artists[i].name + "|";
      }
      str = str.substr(0, str.length - 1);
      this.singerName = str;
      let max = 0;
      for (let key in res.data.data.brs) {
        if (key > max) {
          max = key;
        }
      }
      this.mvUrl = res.data.data.brs[max];
    });
  },
  data() {
    return {
      songName: "",
      singerName: "",
      mvUrl: ""
    };
  }
};
</script>

<style>
.video{
    width: 800px;;
    margin: 20px auto;
}
</style>
