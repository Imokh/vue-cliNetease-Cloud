<template>
  <div class="comment-wrapper my_com">
    <div class="items">
      <div class="item" v-for="(item,index) in commentList" :key="index+1">
        <div class="left">
          <img :src="item.user.avatarUrl" alt />
        </div>
        <div class="right">
          <div class="top">
            <span class="user">{{item.user.nickname}}:</span>
            <span
              class="content"
            >{{item.content}}</span>
          </div>
          <div class="bottom">
            <div class="time">{{item.time | formaTime}}</div>
            <div class="like-wrapper">
              <span>👍</span>{{item.likedCount}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入时间格式化包
import moment from 'moment'
export default {
  created() {
    let comID = this.$route.params.comID;
    this.$axios.get(`/comment/music?id=${comID}&limit=1`).then(res => {
      console.log(res.data.hotComments[0].time);
      this.commentList = res.data.hotComments
    });
  },
  data() {
      return {
          commentList:[]
      }
  },
  filters:{
      formaTime(value){
          let time = moment(value).format('YYYY年MM月DD hh:mm:ss')
          return time
      }
  }

}
</script>

<style>
.my_com {
  width: 1080px;
  margin: 50px auto;
}
</style>
