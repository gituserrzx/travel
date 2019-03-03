<template>
  <div>
    <home-header></home-header>
    <swiper :swiperList="swiperList"></swiper>
    <icons :iconList="iconList"></icons>
    <recommend :recommendList="recommendList"></recommend>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>

<script>
  import HomeHeader from 'components/home/homeHeader'
  import Swiper from 'components/home/swiper'
  import icons from 'components/home/icons'
  import Recommend from 'components/home/Recommend'
  import Weekend from 'components/home/Weekend'
  import api from 'api/index'
  export default {
    components: {
      HomeHeader,
      Swiper,
      icons,
      Recommend,
      Weekend
    },
  data () {
      return {
        iconList: [],
        recommendList: [],
        weekendList: [],
        swiperList: []
      }
  },
    mounted () {
      api.getIndex().then((res) => {
        if (res.data.ret && res.data.data) {
          const data = res.data.data
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
          this.swiperList = data.swiperList
        }
      })
    }
  }
</script>

<style  lang="scss">
</style>

