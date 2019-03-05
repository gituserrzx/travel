<template>
  <div>
    <div class="title">热销推荐</div>
    <ul >
      <router-link tag="li" :to="{name: 'detail', params: {id: item.id}}" class="item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: [ 'recommendList' ]
}
</script>

<style lang="scss" scoped>
  @import '@/assets/mixins.scss';
    .title{
      margin-top: .2rem;
      line-height: .8rem;
      background-color: #eee;
      text-indent: .2rem;
    }
    .item{
      overflow: hidden;
      display: flex;
      height: 1.9rem;
      .item-img{
        width: 1.7rem;
        padding: .1rem;
        min-width: 0;
      }
    .item-info{
      .item-title{
        line-height: .54rem;
        font-size: .32rem;
        @include ellipsis();
      }
      .item-desc{
        line-height: .4rem;
        color: #ccc;
        font-size: .14rem;
        @include ellipsis();
        }
      .item-button{
        line-height: .44rem;
        margin-top: .16rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
          }
      }
    }
</style>
