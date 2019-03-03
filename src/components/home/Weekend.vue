<template>
    <div>
      <div class="title">周末去哪儿</div>
      <ul>
        <li class="item" v-for="item of weekendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" alt="">
          </div>
          <div class="item-info">
            <div class="item-title">{{item.title}}</div>
            <div class="item-desc">{{item.desc}}</div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      props: [ 'weekendList' ]
    }
</script>

<style lang="scss" scoped>
  @import 'assets/mixins.scss';
  .title{
    line-height: .8rem;
    background-color: #eee;
    text-indent: .2rem;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    .item-img{
      width: 100%;
    }
  }
  .item-info{
    padding: .1rem;
    .item-title{
      line-height: .54rem;
      font-size: .32rem;
     @include ellipsis;
    }
    .item-desc{
      line-height: .4rem;
      color: #ccc;
      @include ellipsis;
      font-size: .14rem
    }
  }
</style>
