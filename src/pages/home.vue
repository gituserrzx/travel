<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
  import HomeHeader from 'components/home/homeHeader'
  import Swiper from 'components/home/swiper'
  import icons from 'components/home/icons'
  import Recommend from 'components/home/Recommend'
  import Weekend from 'components/home/Weekend'
  export default {
    components: {
      HomeHeader,
      Swiper,
      icons,
      Recommend,
      Weekend
    }
  }
</script>

<style  lang="scss">
</style>

