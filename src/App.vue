<template>
  <div id='app'>
    <Header />
    <CardList />
    <router-view />
  </div>
</template>

<script>

import Header from '@/pages/Header/Header.vue';
import CardList from '@/pages/CardList/CardList.vue';

export default {
    components: { Header,CardList }
}
</script>

<style lang='scss'>

</style>
