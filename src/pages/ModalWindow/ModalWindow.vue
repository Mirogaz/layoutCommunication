<template>
    <div class='modal' >
        <div class='modal__content'  ref='editModal'>
            <div class='modal__content-title'>
                <p class='modal__content-title-text'>Новое события</p>
            </div>
            <div class='modal__content-input'>
                <InputComponent @inputData='getNameEvent' text='Название события' classInput='input__event' classLabel='label__event'/>
                <InputComponent @inputData='getEventDescription' text='Описание события' classInput='input__description' classLabel='label__description'/>
            </div>
            <div class='modal__content-title'>
                <p class='modal__content-title-text'>Участники</p>
            </div>
             <div class='modal__content-title'>
                <p class='modal__content-title-text'>Свободные отрезки времени</p>
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
                <div @click='closeModal(), createEvent()' class='modal__content-button_create'><Button text='Создать' classBtn='btn__create'/></div>
                <div @click='closeModal' class='modal__content-button_close'><Button text='Отменить' classBtn='btn__close' /></div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import InputComponent from '@/components/InputComponent/InputComponent.vue';

export default {
    data(){
        return {
            close: false,
            nameEvent: '',
            descriptionEvent: '',
            textValue: '',
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
            console.log(data)
        },
        getEventDescription: function(data) {
            this.descriptionEvent = data;
        },
        createEvent: function() {
            this.$emit('addCard', this.nameEvent);
        }
    },
    components: {
        Button,
        InputComponent
    }
}
</script>

<style lang='scss'>
    @import 'ModalWindowStyle.scss';
</style>