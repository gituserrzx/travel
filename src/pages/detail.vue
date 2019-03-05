<template>
  <div class="container">
    <keep-alive>
    <detail-header ></detail-header>
    </keep-alive>
    <banner @click.native="showGallary"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
            :sightName="sightName"></banner>
    <fade-animation>
      <gallary v-show="handleShow" :gallaryImgs="gallaryImgs" @change="change">
      </gallary>
    </fade-animation>
    <list :list="list"></list>
  </div>
</template>

<script>
  import Gallary from 'common/gallary/gallary'
  import Banner from 'components/detail/banner'
  import DetailHeader from 'components/detail/detailHeader'
  import List from 'components/detail/list'
  import FadeAnimation from 'common/fade/fadeanimation'
  import api from '@/api'
    export default {
    components: {
      Gallary,
      Banner,
      DetailHeader,
      List,
      FadeAnimation
    },
      data () {
        return {
          handleShow: false,
          list: [],
          gallaryImgs: [],
          sightName: '',
          bannerImg: ''
        }
      },
      methods: {
        showGallary () {
          this.handleShow = true
        },
        change () {
          this.handleShow = false
        },
        handleData (res) {
          const data = res.data
          if (data.ret && data.data) {
            this.list = data.data.categoryList
            this.gallaryImgs = data.data.gallaryImgs
            this.sightName = data.data.sightName
            this.bannerImg = data.data.bannerImg
          }
        }
      },
      mounted () {
        api.getDetail().then(this.handleData).catch((err) => console.log(err))
      }
    }
</script>

<style lang='scss' scoped>
  .container{
    height: 20rem;
  }
</style>
