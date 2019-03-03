<template>
  <div>
    <city-header></city-header>
    <search></search>
    <list></list>
    <alphabet></alphabet>
  </div>
</template>

<script>
    import cityHeader from 'components/city/cityHeader'
    import search from 'components/city/search'
    import list from 'components/city/list'
    import Alphabet from 'components/city/Alphabet'
    export default {
      components:{
        cityHeader,
        search,
        list,
        Alphabet
    }
    }
</script>

<style>
</style>
