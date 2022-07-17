<template>
    <div class='monthList'>
        <span class='monthList__value'>{{ optionValue }}</span>
        <select @change='selectValue($event)' class='monthList__option'>
            <option class='monthList__option-item' v-for='month in months' :key='month'>{{ month }}</option>
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
            selectValue(e) {
                this.optionValue = e.target.value
            }         
        },
        }
</script>

<style lang='scss'>
    @import 'MonthList';
</style>