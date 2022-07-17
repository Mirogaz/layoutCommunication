<template>
    <div class='modal' >
        <div class='modal__content'  ref='editModal'>
            <div class='modal__content-title'>
                <p class='modal__content-title-text'>Новое события</p>
            </div>
            <div class='modal__content-input'>
                <div @keyup.enter='createEvent' class='modal__content-input-title' :class='{reqiuired: requiredActive}'><InputComponent @inputData='getNameEvent' text='Название события' classInput='input__event' classLabel='label__event'/></div>
                <InputComponent @inputData='getEventDescription' text='Описание события' classInput='input__description' classLabel='label__description'/>
            </div>
            <div class='modal__content-title'>
                <p class='modal__content-title-text'>Участники</p>
                <ParticipantsEvent :isShow='show' :users='userData'/>
                <p class='modal__content-user show' v-if='!hide' @click='expandList'>Показать ещё</p>
                <p class='modal__content-user show' v-if='hide' @click='hideList'>Скрыть</p>
            </div>
             <div class='modal__content-title'>
                <p class='modal__content-title-text'>Свободные отрезки времени</p>
                <div class='modal__content-button-time'>
                    <Button text='8:00 - 8:45' classBtn='btn__time'/>
                    <Button text='9:00 - 9:45' classBtn='btn__time'/>
                    <Button text='10:00 - 10:45' classBtn='btn__time'/>
                    <Button text='11:00 - 11:45' classBtn='btn__time'/>
                </div>
            </div>
             <div class='modal__content-title'>
                <p class='modal__content-title-text'>Создать ссылку на совещание</p>
            </div>
            <div class='modal__content-input-radio'>
                <InputComponent 
                text='ZOOM' 
                classInput='input__radio' 
                classLabel='label__radio' 
                classText='radio__text'
                nameInput='services'
                typeInput='radio' 
                valueInput='ZOOM'
                />
                <InputComponent 
                text='Google meets' 
                classInput='input__radio' 
                classLabel='label__radio' 
                classText='radio__text'
                nameInput='services'
                typeInput='radio' 
                valueInput='Google meets'
                />
                <InputComponent 
                text='Skype' 
                classInput='input__radio' 
                classLabel='label__radio' 
                classText='radio__text'
                nameInput='services'
                typeInput='radio' 
                valueInput='Skype'
                />
                <p class='modal__content-input-radio_text'>или</p>
                <Button text='Другой сервис' classBtn='btn__other' />
            </div>
            <div class='modal__content-button'>
                <div @click='createEvent' class='modal__content-button_create'><Button text='Создать' classBtn='btn__create'/></div>
                <div @click='closeModal' class='modal__content-button_close'><Button text='Отменить' classBtn='btn__close' /></div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import InputComponent from '@/components/InputComponent/InputComponent.vue';
import ParticipantsEvent from '@/components/ParticipantsEvent/ParticipantsEvent.vue';

export default {
    data(){
        return {
            close: false,
            nameEvent: null,
            descriptionEvent: '',
            textValue: '',
            requiredActive: false,
            userData: ['Андрей Рыбалкин', 'Константин Павлович', 'Алексей Молонов', 'Илья Копытин', 'Максим Меркулов', 'Максим Красюк'],
            show: false,
            hide: false
        }
    },
    props: {
        activeModal: {
            type: Boolean
        }
    },
    methods: {
        closeModal: function(){
            this.close = true;
            this.$emit('close', this.close)
        },
        getNameEvent: function(data) {
            this.nameEvent = data;
        },
        getEventDescription: function(data) {
            this.descriptionEvent = data;
        },
        createEvent: function() {
            if(this.nameEvent === null) {
                this.requiredActive = true
            }
            else {
                this.close = true;
                this.$emit('close', this.close)
                this.$emit('addCard', this.nameEvent);
            }
        },
        expandList: function() {
            this.show = true;
            this.hide = true;
        },
        hideList: function() {
            this.show = false;
            this.hide = false;
        }
    },
    components: {
        Button,
        InputComponent,
        ParticipantsEvent
    }
}
</script>

<style lang='scss'>
    @import 'ModalWindowStyle.scss';
</style>