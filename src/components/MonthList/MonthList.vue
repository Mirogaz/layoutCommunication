<template>
    <div class='monthListList'>
        <span class='monthList__value'>{{ optionValue }}</span>
        <select class='monthList__option'>
            <option @click='selectValue(optionValue)' class='monthList__option-item' v-for='month in months' :key='month'>{{ month }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                optionValue: ''
            }
        },
        methods: {
            selectValue() {
                let option = document.getElementsByClassName("monthList__option-item");
                for (let i = 0; i < option.length; i++) {
                option[i].addEventListener("click", () => {
                    this.optionValue = option[i].value;
                })
            }         
        },
        }
    }
</script>

<style lang='scss'>
    @import 'MonthList';
</style>