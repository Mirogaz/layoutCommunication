<template>
    <div class='input'>
        <label :class='classLabel'> <p :class='classText'>{{ text }}</p>
            <input
                :class='classInput'
                :type='typeInput' 
                :value='valueInput' 
                :name='nameInput'
                @input="$emit('inputData', $event.target.value ? $event.target.value : null)" 
                class='input__item'/>
        </label>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            inputData: ''
        }
    },
    props: {
        text: String,
        typeInput: String,
        valueInput: String,
        classInput: String,
        classLabel: String,
        classText: String,
        nameInput: String
    }
}
</script>

<style>
    @import 'InputStyle.scss';
</style>