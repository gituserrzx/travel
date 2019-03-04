<template>
  <div>
      <div class="backbutton" v-show="isShow">
        <router-link tag="div" :to="{name: 'home'}">
        <span class="iconfont back">&#xe624;</span>
        </router-link>
      </div>
      <div class="header" v-show="!isShow" :style="styleShow">
        景点详情
        <router-link :to="{name: 'home'}">
          <div class="iconfont icon">&#xe624;</div>
        </router-link>
      </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          isShow: true,
          styleShow: {
            opacity: 0
          }
        }
      },
      methods: {
        handleScrollTop () {
          const top = document.documentElement.scrollTop
          if (top > 50) {
            if (top < 140){
              let opacity = top / 140;
              opacity = opacity > 1 ? 1 : opacity
              this.styleShow = {
                opacity
              }
            }
            this.isShow = false
          } else {
            this.isShow = true
          }
          
        }
      },
      activated () {
        window.addEventListener('scroll', this.handleScrollTop)
      },
      deactivated() {
        window.removeEventListener('scroll', this.handleScrollTop)
      }
    }
</script>

<style lang='scss' scoped>
  @import 'assets/varibles.scss';
  .backbutton{
    position: absolute;
    top: .2rem;
    left: .2rem;
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,.5);
    color: white;
    z-index: 1;
    text-align: center;
    .back{
      line-height: .8rem;
    }
  }
  .header {
    position: fixed;
    z-index: 1;
    overflow: hidden;
    line-height: .86rem;
    width: 100%;
    height: $headerHeight;
    background-color: $bgColor;
    color: #fff;
    text-align: center;
  .icon{
    color: #fff;
    position: absolute;
    top: .02rem;
    left: .03rem;
    text-align: left;
    width: .64rem;
    text-align: center;
    font-szie: .4rem;
  }
  }
</style>
