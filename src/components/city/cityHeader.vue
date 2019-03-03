<template>
  <div class="header">
    城市选择
    <router-link :to="{name: 'home'}">
      <div class="iconfont icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
  @import 'assets/varibles.scss';
  .header {
    position: relative;
    overflow: hidden;
    line-height: .86rem;
    width: 100%;
    height: $headerHeight;
    background-color: $bgColor;
    color: #fff;
    text-align: center;
  .icon{
    color: #fff;
    position: absolute;
    top: .02rem;
    left: .03rem;
    text-align: left;
    width: .64rem;
    text-align: center;
    font-szie: .4rem;
  }
  }
</style>
