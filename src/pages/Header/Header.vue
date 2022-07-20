<template lang='html'>
    <div class='header'>
            <div class='header__logo'>
                <SvgSelector class='header__logo-svg' id='logo'/>
                <p class='header__logo-title'>Коммуникации</p>
            </div>
        <div class='header__menu'>
            <p class='header__menu-item'>Мои события</p>
            <p class='header__menu-item'>Настроить расписание</p>
            <p class='header__menu-item'>Группы</p>
            <p class='header__menu-item'>Интеграции</p>
            <p class='header__menu-item'>Архив</p>
        </div>
        <div class='header__user'>
            <div class='header__user-name'>Андрей Р.</div>
            <div class='header__user-logo'><img src='@/assets/img/photo.jpg' alt='Картинка' /></div>
            <div class='header__hamburger-menu'><HamburgerMenu /></div>
        </div>
        
    </div>
</template>

<script>
import SvgSelector from '@/components/SvgSelector/SvgSelector.vue'
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu.vue'

export default {
    data() {
        return {
        }
    },
    components: {
    SvgSelector,
    HamburgerMenu
}
}
</script>

<style lang='scss'>
    @import 'HeaderStyle';
</style>