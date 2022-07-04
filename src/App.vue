<template>
  <div id='app'>
    <Header />
    <Navigation />
    <CardList />
    <ButtonGroup />
  </div>
</template>

<script>

import Header from '@/pages/Header/Header.vue';
import Navigation from '@/pages/Navigation/Navigation.vue';
import CardList from '@/pages/CardList/CardList.vue';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup.vue';
export default {
    components: { Header,Navigation,CardList,ButtonGroup }
}
</script>

<style lang='scss'>

</style>
