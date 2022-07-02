<template>
  <div id='app'>
    <Header />
    <Navigation />
    <CardList />
  </div>
</template>

<script>

import Header from './pages/Header/Header.vue';
import Navigation from './pages/Navigation/Navigation.vue';
import CardList from './pages/CardList/CardList.vue';

export default {
    components: { Header,Navigation,CardList }
}
</script>

<style lang='scss'>

</style>
