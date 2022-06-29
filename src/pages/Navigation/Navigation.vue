<template>
    <div class='navigation'>
        <div class='navigation__title'>
            <p class='navigation__title-item'>Моё расписание</p>
            <p class='navigation__title-item'>На согласовании</p>
        </div>
        <div class='navigation__date'>
            <div class='navigation__date-select'>
                <input type='date' />
                <SvgSelector id='calendarGradient' /> 
            </div>
        </div>
        <div class='navigation__button-date'>
            <div @click='chooseDate' class='navigation__button-select navigation__button-select_active'>День</div>
            <div @click='chooseDate' class='navigation__button-select'>Неделя</div>
            <div @click='chooseDate' class='navigation__button-select'>Месяц</div>
        </div>
        <div class='navigation__button'>
            <button class='navigation__button-create'>
                <SvgSelector id='plus' />
                <span class='navigation__button-text'>Создать</span>
            </button>
        </div>
    </div>
</template>

<script>
import SvgSelector from '@/components/SvgSelector/SvgSelector.vue'

export default {
    data() {
        return {
            
        }
    }, 
   methods: {
    chooseDate: function() {
        const btns = Array.from(document.getElementsByClassName("navigation__button-select"));
            btns.forEach((element) => {
                element.addEventListener("click", () => {
                    btns.forEach((btn) => btn.classList.remove("navigation__button-select_active"));
                    element.classList.add("navigation__button-select_active");
                 });
              });
              console.log(btns);
            }
   },
    components: {
        SvgSelector
    }
}
</script>

<style lang='scss'>
    @import 'NavigationStyle';
</style>