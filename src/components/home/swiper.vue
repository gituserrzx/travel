<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
       <img  class="swiper-img" :src='item.imgUrl'/>
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
    export default {
      props: [ 'swiperList' ],
      name: 'homeSwiper',
      data () {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true
          }
        }
      },
      computed: {
        showSwiper () {
          return this.swiperList.length
        }
      }
    }
</script>

<style lang="scss">
   .swiper-pagination-bullet-active{
    background-color: white!important;
  }
  .wrapper{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 36%;
    background-color: #eee;
    margin-bottom: .2rem;
    .swiper-img{
        width: 100%;
        height: 100%;
  }
  }
</style>
