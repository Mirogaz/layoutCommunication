<template>
    <div class='navigation'>
        <div class='navigation__title'>
            <router-link :to="{name:'home'}">
                <p class='navigation__title-item_schedule'>Моё расписание</p>
            </router-link>
            <router-link :to="{name:'approval'}">
                <p class='navigation__title-item_approval'>На согласовании</p>
            </router-link>
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
        <div class='navigation__parameters'>
            <div class='navigation__button-date'>
                <ButtonGroup @dataIndex='getIndex' :data='dataButton' />
            </div>
            <div class='navigation__format'>
                <div class='navigation__format-select'><SvgSelector id='list' /></div>
                <div class='navigation__format-select'><SvgSelector id='calendar' /></div>
            </div>
        </div>
        <div class='navigation__button'>
            <button @click="openModal" class='navigation__button-create'>
                <SvgSelector id='plus' />
                <span class='navigation__button-text'>Создать</span>
            </button>
        </div>
            <div class='navigation__edit' v-if='openEdit'>
                <EditCard @closeEdit='closeWindow' @newName='getNewNameEvent'/>
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
import ModalWindow from '@/pages/ModalWindow/ModalWindow.vue';
import EditCard from '@/components/EditCard/EditCard.vue'

export default {
    data() {
        return {
            activeClass: '',
            dataButton: ['День', 'Неделя', 'Месяц'],
            elementIndex: '',
            activeModal: false,
            getNameEvent: '',
            activeEdit: false,
            newNameEvent: ''
        }
    }, 
    props: {
        openEdit: Boolean
    },
    methods: {
        getIndex(data) {
                this.elementIndex = data
            },
        getDay() {
            if(this.elementIndex === 'День') this.activeClass = 'День';
            else if(this.elementIndex === 'Неделя') this.activeClass = 'Неделя';
            else this.activeClass = 'Месяц'
        },
        closeModalWindow(data) {
            if (data) {
                this.activeModal = false;
            }
        },
        nameEvent(data) {
            this.getNameEvent = data;
            this.$emit('addCard', this.getNameEvent)
        },
        openModal() {
            this.activeModal = true
        },
        closeWindow(data) {
            if(data) this.$emit('closeWindow', this.activeEdit)
        },
        getNewNameEvent(data) {
            if(data) this.newNameEvent = data
            this.$emit('newNameEvent', this.newNameEvent)
        }
    },
    components: {
        SvgSelector,
        MonthList,
        ButtonGroup,
        ModalWindow,
        EditCard
}
}
</script>

<style lang='scss'>
    @import 'NavigationStyle';
</style>