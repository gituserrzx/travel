<template>
  <div class="list" ref="wrapper">
    <div>
    <div class="area">
      <div class="title border-topbottom">
        当前城市
      </div>
      <div class="button-list">
        <div class="buttonWrap">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">
        热门城市
      </div>
      <div class="button-list"  >
        <div class="buttonWrap" v-for="item of hotList"
             :key="item.id">
          <div class="button" >
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="area"  v-for="(v,k) of cityList" :key="k">
      <div class="title border-topbottom" :id="k">{{k}}</div>
        <div class="cityTable" v-for="item of v" :key="item.id">
            <div class="city border-bottom">
              {{item.name}}
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
    props: ['cityList', 'hotList'],
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
    }
</script>

<style lang="scss" scoped>
  .border-topbottom{
    &:before{
       border-color: #ccc;
     }
    &:after{
       border-color: #ccc;
     }
  }
  .border-bottom{
    &:before {
       border-color: #ccc;
     }
  }
  .list{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title{
      overflow:hidden;
      height: .44rem;
      background-color: #eee;
      color: #666;
      line-height: .44rem;
      padding-left: .1rem;
      font-size: .28rem;
    }
    .button-list{
      padding: 0.1rem;
    overflow: hidden;
      .buttonWrap{
        width: 32%;
        float: left;
        .button{
          color: #666;
          margin: .1rem;
          padding: .1rem 0;
          border: .02rem solid #ccc;
          line-height: .4rem;
          text-align: center;
        }
      }
    }
    .cityTable{
        .city{
          line-height: .54rem;
          color: #666;
          padding: .2rem;
        }
    }
  }
</style>
