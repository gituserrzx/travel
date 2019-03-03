<template>
  <div>
    <div class="list"  >
      <a :href="'#'+ k" class="item" v-for="(v, k) of alist" :key="k">{{k}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['alist']
  }
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
