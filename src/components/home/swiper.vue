<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of swiperList" :key="item.id">
       <img  class="swiper-img" :src='item.imgUrl'/>
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
    export default {
      name: 'homeSwiper',
      data () {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true
          },
          swiperList: [{
            id: '0001',
            imgUrl: 'http://img4.imgtn.bdimg.com/it/u=338830099,220214673&fm=26&gp=0.jpg'
          },
            {
            id: '0002',
            imgUrl: 'http://img3.imgtn.bdimg.com/it/u=366334772,3752520079&fm=26&gp=0.jpg'
          }]
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
<<<<<<< HEAD
  height: 0;
  width: 100%;
  padding-bottom: 36%;
  background-color: #eee;
  .swiper-img{
=======
    height: 0;
>>>>>>> dev
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
