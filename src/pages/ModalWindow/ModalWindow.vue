<template>
    <div class='modal'>
        <div class='modal__content'>
            <div class='modal__content-title'>
                <p>Новое события</p>
            </div>
            <div class='modal__content-input'>
                <InputComponent text='Название события'/>
                <InputComponent text='Описание события'/>
            </div>
            <div class='modal__content-button'>
                <div class='modal__content-button_create'><Button text='Создать'/></div>
                <div @click='closeModal' class='modal__content-button_close'><Button text='Отменить'/></div>
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
            close: false
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