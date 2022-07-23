<template>
    <div class='edit'>
        <div class='edit__content'>
            <div class='edit__content_title'>
                <p class='edit__content_title-text'>Новое название карточки</p>
            </div>
            <div @keyup.enter='createNewNameEvent' class='edit__content-input'>
                <InputComponent @inputData='getNewEvent' classInput='input__edit' />
            </div>
            <div @click='createNewNameEvent' class='edit__content-change'>
                <Button text='Изменить' classBtn='btn__change' />
            </div>
            <div @click='closeEdit' class='edit__content-close'>
                <Button text='Отменить' classBtn='btn__close' />
            </div>
        </div>
    </div>
</template>

<script>
import InputComponent from '@/components/InputComponent/InputComponent.vue';
import Button from '@/components/Button/Button.vue';

export default {
    data() {
        return {
            newName: null,
            closeWindowEdit: false
        }
    },
    methods: {
        getNewEvent(data) {
            this.newName = data;
        },
        closeEdit() {
            this.closeWindowEdit = true
            this.$emit('closeEdit', this.closeWindowEdit)
        },
        createNewNameEvent() {
           if(this.newName) {
                this.$emit('newName', this.newName)
                this.closeWindowEdit = true
                this.$emit('closeEdit', this.closeWindowEdit)
           }
        }
    },
    components: {
        InputComponent,
        Button
    }
}
</script>

<style lang='scss'>
    @import 'EditCardStyle.scss';
</style>