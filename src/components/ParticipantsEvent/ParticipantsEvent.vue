<template>
    <div class='participants'>
        <div class='participants__content' v-for='(user,index) in users' :key='index' v-show='open === isShow ? index < 3 : user.length '>
            <div class='participants__user-logo'><img src='@/assets/img/photo.jpg' alt='Картинка' /></div>
            <p class='participants__user-name-text'>{{ user }}</p>
        </div>
    </div>
</template>

<script>
//import InputComponent from '@/components/InputComponent/InputComponent.vue';

export default {
    data() {
        return {
            open: false
        }
    },

    props: {
        users: Array,
        isShow: Boolean
    },
    components: {
       
    }
}
</script>

<style lang='scss'>
    @import 'ParticipantsEventStyle.scss';
</style>