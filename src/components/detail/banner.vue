<template>
  <div class="banner" >
    <img class="img-content" :src="bannerImg" alt="">
    <div class="info">
      <div class="title">{{this.sightName}}</div>
      <div class="number">
        <span class="iconfont">&#xe692;</span>
        {{this.gallaryImgs.length}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['bannerImg', 'sightName', 'gallaryImgs']
    }
</script>

<style lang='scss' scoped>
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
  .img-content{
    width: 100%;
  }
  .info{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: .6rem;
    display: flex;
    justify-content: space-between;
  .title{
    color: #fff;
    line-hieght: .32rem;
    padding: .2rem .2rem;
  }
  .number{
    margin-top: 0.2rem;
    margin-right: .2rem;
    padding: 0 .2rem;
    height: .40rem;
    line-height: .40rem;
    background: rgba(0,0,0,0.5);
    color: #fff;
    border-radius: .2rem;
  }
  }
  }
</style>
