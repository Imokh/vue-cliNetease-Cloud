<template>
  <div class="result-wrapper">
    <!--前端路由组件-->

    <div class="song" v-for="(item,index) in list" :key="index+1" @dblclick="comment(item)">
      <div class="name">
        <span class="iconfont icon-play" @click="toPlay(item)"></span>
        {{item.name}}
        <span class="iconfont icon-editmedia" v-if="item.mvid != 0" @click="mvPlay(item)"></span>
      </div>
      <div class="singer">{{ item.artists | formatName }}</div>
      <div class="album">《{{ item.album.name }}》</div>
      <div class="time">{{ item.duration | formatTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // let name = this.$route.params.songname;
    // this.$axios.get(`/search?keywords=${name}`).then(res => {
    //   //console.log(res);
    //   this.list = res.data.result.songs;
    // });
    getData()
  },
  watch: {
    '$route.params.songname'(){
      getData()
    }
  },
  filters: {
    formatName(value) {
        let str = ''
        for(let i = 0; i < value.length;i++){
            str = value[i].name + '|'
        }
            str = str.substr(0,str.length-1)
        return str
    },
    formatTime(value){
        let str = Math.round(value / 1000)
        let min = parseInt(str / 60)
        let sec = str % 60
        sec = sec<10? sec+'0':sec
        return min + ':' + sec
    }
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
      toPlay(item){
          this.$router.push("/player/" + item.id);
      },
      mvPlay(item){
          this.$router.push(`/mv/${item.mvid}`)
      },
      comment(item){
          this.$router.push(`/comment/${item.id}`)
      }
  },
  getData(){
    let name = this.$route.params.songname;
    this.$axios.get(`/search?keywords=${name}`).then(res => {
      //console.log(res);
      this.list = res.data.result.songs;
    });
  },
  name: "results"
};
</script>

<style>
</style>
