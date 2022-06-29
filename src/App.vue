<template>
  <div id='app'>
    <Header />
    <Navigation />
  </div>
</template>

<script>

import Header from './pages/Header/Header.vue';
import Navigation from './pages/Navigation/Navigation.vue';

export default {
    data() {
        return {
        };
    },
    components: { Header,Navigation }
}
</script>

<style lang='scss'>

</style>
