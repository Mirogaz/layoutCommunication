<template>
    <div class='menu'>
        <div class='menu_activation' @click='activeMenu=true'>
            <SvgSelector id='menu' v-if='!activeMenu'/>
        </div>
            <div class='hamburger' v-if='activeMenu'>
                <div class='hamburger__menu'>
                    <p class='hamburger__menu-item' @click='hideMenu'>Мои события</p>
                    <p class='hamburger__menu-item' @click='hideMenu'>Настроить расписание</p>
                    <p class='hamburger__menu-item' @click='hideMenu'>Группы</p>
                    <p class='hamburger__menu-item' @click='hideMenu'>Интеграции</p>
                    <p class='hamburger__menu-item' @click='hideMenu'>Архив</p>
                    </div>
            </div>
    </div>
</template>

<script>
import SvgSelector from '@/components/SvgSelector/SvgSelector.vue'

export default {
    data() {
        return {
            activeMenu: false
        }
    },
    methods: {
        hideMenu() {
            this.activeMenu = false
        }
    },
    components: {
    SvgSelector
    }
}
</script>

<style lang='scss'>
    @import 'HamburgerMenuStyle.scss';
</style>