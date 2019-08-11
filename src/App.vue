<template>
    <div>
        <search></search>
        <router-view></router-view>
    </div>
</template>

<script>
//倒入search组件
import search from './components/search'
//倒入slider组件
//import silder from './components/silder'
export default {
//注册组件
components:{
    search,
    
},
mounted() {
    this.$router.push('/slider')
},
}
</script>

<style>

</style>
