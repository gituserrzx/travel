<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
      <div class="header-right">
        <router-link :to="{name: 'city'}">
        {{$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
        </router-link>
      </div>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
  @import 'assets/varibles.scss';
  a{
    color: white;
  }
  .header{
    display: flex;
    line-height: $headerHeight;
    color: #fff;
    background-color: $bgColor;
    .header-left{
      width: .64rem;
      float: left;
      text-align: center;
      font-size: .20rem
    }
    .header-input{
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-left: .2rem;
      margin-top: .12rem;
      background-color: #fff;
      border-radius: .1rem;
      color: #cacaca;
      padding-left: .2rem;
    }
    .header-right {
      width: 1.24rem;
      float: right;
      text-align: center;
    }
      .arrow-icon{
        font-size: .24rem;
        margin-left: -0.06rem
    }
  }
</style>
