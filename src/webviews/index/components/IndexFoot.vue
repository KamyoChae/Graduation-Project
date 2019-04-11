<template>
<div class="wrapper">
    <div class="foot">
        <span>首页</span>
        <span>发布</span>
        <span>搜索</span>
        <span>个人</span> 
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.wrapper
    position fixed
    bottom 0
    width 100%
    height 7vh
    background #fff
    border-top 1px solid #eee
    .foot
        width inherit
        height inherit
        display flex  
        justify-content space-around
        align-items center
        span   
            background red  
</style>