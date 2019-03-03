<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword"  class="seaInp" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <div>
      <div class="item" v-for="item of itemList" :key="item.id">{{item.name}}</div>
      </div>
      <div class="nodata" v-show="noMoreData">没有更多的信息</div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      props: ['list'],
      data () {
        return {
          keyword: '',
          timer: null,
          itemList: []
        }
      },
      mounted () {
        this.scroll = new BScroll(this.$refs.wrapper)
      },
     watch: {
      keyword () {
        const result = []
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.itemList = []
          return
        }
        this.timer = setTimeout(() => {
          for (let prop in this.list) {
            this.list[prop].forEach((item) => {
              if (item.name.indexOf(this.keyword) > -1 || item.spell.indexOf(this.keyword) > -1) {
                result.push(item)
              }
            })
          }
          this.itemList = result
          return this.itemList
        }, 500)
      }
    },
      computed: {
      noMoreData () {
        return !this.itemList.length
      }
      }
    }
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
  .search-content{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #eee;
    .item{
      color: #666;
      padding-left: .1rem;
      line-height: .44rem;
      border-bottom: .02rem solid #ccc;
      background-color: #fff;
    }
    .nodata{
      color: #666;
      padding-left: .1rem;
      line-height: .44rem;
      border-bottom: .02rem solid #ccc;
      background-color: #fff;
    }
  }
</style>
