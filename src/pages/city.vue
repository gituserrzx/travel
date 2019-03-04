<template>
  <div>
    <city-header></city-header>
    <search :list="cityList"></search>
    <list :hotList="hotCity" :cityList="cityList"></list>
    <alphabet :alist="cityList"></alphabet>
  </div>
</template>

<script>
    import cityHeader from 'components/city/cityHeader'
    import search from 'components/city/search'
    import list from 'components/city/list'
    import Alphabet from 'components/city/Alphabet'
    import api from '@/api/index'
    export default {
      components: {
        cityHeader,
        search,
        list,
        Alphabet
    },
    data () {
        return {
          hotCity: [],
          cityList: {}
        }
    },
      created () {
        api.getCity().then((res) => {
            const data = res.data
            if (data.ret && data.data) {
              this.cityList = data.data.cities
              this.hotCity = data.data.hotCities
            }
        })
      }
    }
</script>

<style>
</style>
