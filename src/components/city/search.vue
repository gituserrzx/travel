<template>
  <div class="search">
    <input type="text" class="seaInp" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
  @import 'assets/varibles.scss';
  .search{
    height: .72rem;
    padding: 0 .1rem;
    background: $bgColor;
    .seaInp{
      box-sizing: border-box;
      width: 100%;
      height: .66rem;
      line-height: .66rem;
      text-align: center;
      padding: 0 .4rem;
      font-size: .24rem;
      border-radius: .06rem;
    }
  }
</style>
