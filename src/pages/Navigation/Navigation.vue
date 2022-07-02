<template>
    <div class='navigation'>
        <div class='navigation__title'>
            <p class='navigation__title-item'>Моё расписание</p>
            <p class='navigation__title-item'>На согласовании</p>
            <p class='navigation__title-item_notification'>12</p>
        </div>
        <div class='navigation__date'>
            <div @click='saveTypeDate' class='navigation__date-select'>
                <div class='navigation__date-day' v-if="activeClass === 'day'"><input type='date' /></div>
                <div class='navigation__date-week' v-if="activeClass === 'week'"><input type='date' /></div>
                <div class='navigation__date-month' v-if="activeClass === 'month'"><MonthList /></div>
                <SvgSelector id='calendarGradient' /> 
            </div>
        </div>
        <div class='navigation__button-date'>
            <div @click='chooseDate' class='navigation__button-select day'>День</div>
            <div @click='chooseDate' class='navigation__button-select week'>Неделя</div>
            <div @click='chooseDate' class='navigation__button-select month'>Месяц</div>
        </div>
        <div class='navigation__format'>
            <div @click='choseFormat' class='navigation__format-select'><SvgSelector id='list' /></div>
            <div @click='choseFormat' class='navigation__format-select'><SvgSelector id='calendar' /></div>
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
import MonthList from '@/components/MonthList/MonthList.vue';

export default {
    data() {
        return {
            activeClass: '',
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
            },
    choseFormat: function() {
        const btns = Array.from(document.getElementsByClassName("navigation__format-select"));
            btns.forEach((element) => {
                element.addEventListener("click", () => {
                    btns.forEach((btn) => btn.classList.remove("navigation__button-select_active"));
                    element.classList.add("navigation__button-select_active");
                 });
              });
    },
    saveTypeDate: function() {
       
        const day = document.getElementsByClassName('day');
        const week = document.getElementsByClassName('week');

        if(day[0].classList.contains('navigation__button-select_active')) {
            this.activeClass = 'day';
        } else if(week[0].classList.contains('navigation__button-select_active')) {
            this.activeClass = 'week';
        }

        else {
            this.activeClass = 'month';
        }
    }
   },
    components: {
        SvgSelector,
        MonthList
    }
}
</script>

<style lang='scss'>
    @import 'NavigationStyle';
</style>