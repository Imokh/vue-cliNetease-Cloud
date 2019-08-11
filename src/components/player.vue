<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" :src="alPic" alt />
    </div>
    <div class="right">
      <div class="title">
        <img src="../assets/img/tag.png" alt />
        <span>{{songName}}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{singerName}}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{alName}}</span>
      </div>
      <audio class="audio" controls :src="songUrl"></audio>
      <ul class="lyric-container">
        <li class="lyric">难以忘记</li>
        <li class="lyric">初次见你</li>
        <li class="lyric">那双迷人的小眼睛</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let id = this.$route.params.id;
    this.$axios.get(`/song/detail?ids=${id}`).then(res => {
      this.songName = res.data.songs[0].name;
      var str = "";
      for (var i = 0; i < res.data.songs[0].ar.length; i++) {
        str += res.data.songs[0].ar[i].name + "|";
      }
      str = str.substr(0, str.length - 1);
      this.singerName = str;

      this.alName = res.data.songs[0].al.name;
      this.alPic = res.data.songs[0].al.picUrl;
    });
    this.$axios.get(`/song/url?id=${id}`)
    .then(res => {
        this.songUrl = res.data.data[0].url;
    })
  },
  data() {
      return {
          songName:'',
          singerName:'',
          alName:'',
          alPic:'',
          songUrl:''
      }
  },
};
</script>

<style>
</style>
