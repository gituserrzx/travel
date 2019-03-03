<template>
  <ul class="list">
    <li class="item">1</li>
    <li class="item">2</li>
    <li class="item">2</li>
    <li class="item">2</li>
    <li class="item">2</li>
    <li class="item">2</li>
  </ul>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import 'assets/varibles.scss';
    .list{
      position: absolute;
      right: 0;
      bottom:0;
      top: 1.54rem;
      width: .44rem;
      text-align: center;
      display:flex;
      justify-content: center;
      flex-direction: column;
      .item{
        line-height: 0.44rem;
        color: $bgColor;
      }
    }
</style>
