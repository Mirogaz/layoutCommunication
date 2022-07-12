<template>
    <div class='navigation'>
        <div class='navigation__title'>
            <p class='navigation__title-item'>Моё расписание</p>
            <p class='navigation__title-item'>На согласовании</p>
            <p class='navigation__title-item_notification'>12</p>
        </div>
        <div @click='getDay' class='navigation__date'>
            <div class='navigation__date-select'>
                <div class='navigation__date-day'   v-if="activeClass === 'День'" ><input type='date' /></div>
                <div class='navigation__date-week'  v-if="activeClass === 'Неделя'" ><input type='date' /></div>
                <div class='navigation__date-month' v-if="activeClass === 'Месяц'"><MonthList /></div>
                <SvgSelector id='calendarGradient' /> 
            </div>
        </div>
        <div class='navigation__button-date'>
            <ButtonGroup @dataIndex='getIndex' :data='dataButton' />
        </div>
        <div class='navigation__format'>
            <div class='navigation__format-select'><SvgSelector id='list' /></div>
            <div class='navigation__format-select'><SvgSelector id='calendar' /></div>
        </div>
        <div class='navigation__button'>
            <button @click="openModal" class='navigation__button-create'>
                <SvgSelector id='plus' />
                <span class='navigation__button-text'>Создать</span>
            </button>
        </div>
        <div class='navigation__modal' v-if="activeModal">
            <ModalWindow @close='closeModalWindow' :activeModal='activeModal' @addCard='nameEvent'/>
        </div>
    </div>
</template>

<script>
import SvgSelector from '@/components/SvgSelector/SvgSelector.vue'
import MonthList from '@/components/MonthList/MonthList.vue';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup.vue';
import ModalWindow from '../ModalWindow/ModalWindow.vue';

export default {
    data() {
        return {
            activeClass: '',
            dataButton: ['День', 'Неделя', 'Месяц'],
            elementIndex: '',
            activeModal: false,
            getNameEvent: ''
        }
    }, 
   methods: {
        getIndex: function(data) {
                this.elementIndex = data
            },
        getDay: function() {
            if(this.elementIndex === 'День') this.activeClass = 'День';
            else if(this.elementIndex === 'Неделя') this.activeClass = 'Неделя';
            else this.activeClass = 'Месяц'
        },
        closeModalWindow: function(data) {
            if (data === true) {
                this.activeModal = false;
            }
        },
        nameEvent: function(data) {
            this.getNameEvent = data;
            this.$emit('addCard', this.getNameEvent)
        },
        openModal: function() {
            this.activeModal = true
            
        }
    },
    components: {
        SvgSelector,
        MonthList,
        ButtonGroup,
        ModalWindow
}
}
</script>

<style lang='scss'>
    @import 'NavigationStyle';
</style>