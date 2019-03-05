<template>
  <div class="gallary" @click="closeGallary">
    <div class="content">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="item of gallaryImgs" :key="item" >
            <img  class="img-content"  :src="item" alt="">
        </swiper-slide>
        <!--<swiper-slide >-->
            <!--<img  class="img-content" src="http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg" alt="">-->
        <!--</swiper-slide>-->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            observer: true,
            observeParents: true,
            paginationType: 'fraction'
          }
        }
      },
      props: ['gallaryImgs'],
      methods: {
        closeGallary () {
          this.$emit('change')
        }
      }
    }
</script>

<style lang='scss' scoped>
  .gallary,.swiper-wrapper{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .content{
      height: 0;
      padding-bottom: 100%;
      width: 100%;
      .img-content{
        width: 100%;
      }
      .swiper-pagination{
        color: #fff;
      }
    }
  }
</style>
