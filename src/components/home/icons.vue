<template>
    <div class="icons">
      <swiper  :options="swiperOption">
        <swiper-slide  v-for="(page, i) of pages" :key="i">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class='img-content' src='http://img1.imgtn.bdimg.com/it/u=3428345551,1052907220&fm=26&gp=0.jpg'/>
            </div>
            <p class="title">热门景点</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
    export default {
      name: 'HomeIcons',
      data () {
        return {
          swiperOption: {
            loop: true
          },
          iconList: [
            {
              id: '001',
              imgUrl: 'http://img1.imgtn.bdimg.com/it/u=3428345551,1052907220&fm=26&gp=0.jpg',
              title: '热景点热门景点热门景点'
            },
            {
              id: '002',
              imgUrl: 'http://img1.imgtn.bdimg.com/it/u=3428345551,1052907220&fm=26&gp=0.jpg',
              title: '热门景点'
            },
            {
              id: '003',
              imgUrl: 'http://img1.imgtn.bdimg.com/it/u=3428345551,1052907220&fm=26&gp=0.jpg',
              title: '热门景点'
            },
            {
              id: '004',
              imgUrl: 'http://img1.imgtn.bdimg.com/it/u=3428345551,1052907220&fm=26&gp=0.jpg',
              title: '热门景点'
            },
            {
              id: '005',
              imgUrl: 'http://img1.imgtn.bdimg.com/it/u=3428345551,1052907220&fm=26&gp=0.jpg',
              title: '热门景点'
            },
            {
              id: '006',
              imgUrl: 'http://img1.imgtn.bdimg.com/it/u=3428345551,1052907220&fm=26&gp=0.jpg',
              title: '热门景点'
            },
            {
              id: '007',
              imgUrl: 'http://img1.imgtn.bdimg.com/it/u=3428345551,1052907220&fm=26&gp=0.jpg',
              title: '热门景点'
            },
            {
              id: '008',
              imgUrl: 'http://img1.imgtn.bdimg.com/it/u=3428345551,1052907220&fm=26&gp=0.jpg',
              title: '热门景点'
            },
            {
              id: '009',
              imgUrl: 'http://img1.imgtn.bdimg.com/it/u=3428345551,1052907220&fm=26&gp=0.jpg',
              title: '热门景点'
            }
          ]
        }
      },
      computed: {
        pages () {
          const pages = []
          this.iconList.forEach((item, index) => {
            const num = Math.floor(index / 8)
            if (!pages[num]) {
              pages[num] = []
            }
            pages[num].push(item)
          })
          return pages
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import 'assets/varibles.scss';
  @import 'assets/mixins.scss';
  .icons,.swiper-container{
    padding-bottom: 50%;
    height: 0;
    .icon{
      overflow: hidden;
      display: inline-block;
      position: relative;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      .icon-img{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: .44rem;
        .img-content{
          box-sizing: border-box;
          padding: .1rem;
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
      .title{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color: $darkFontColor;
        font-size: 12px;
        /*@include ellipsis();*/
      }
    }
  }
  
</style>
