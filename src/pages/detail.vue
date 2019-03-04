<template>
  <div class="container">
    <keep-alive>
    <detail-header></detail-header>
    </keep-alive>
    <banner @click.native="showGallary"></banner>
    <gallary v-show="handleShow" @change="change"></gallary>
  </div>
</template>

<script>
  import Gallary from 'common/gallary/gallary'
  import Banner from 'components/detail/banner'
  import DetailHeader from 'components/detail/detailHeader'
    export default {
    components: {
      Gallary,
      Banner,
      DetailHeader
    },
      data () {
        return {
          handleShow: false
        }
      },
      methods: {
        showGallary () {
          this.handleShow = true
        },
        change () {
          this.handleShow = false
        }
      }
    }
</script>

<style lang='scss' scoped>
  .container{
    height: 20rem;
  }
</style>
